import React, { useState, useEffect } from 'react';
import { Input, message } from 'antd';
import * as API from '../../api/task';
import { useAppContext } from '../AppContext/AppContext';

const TodoForm = (props) => {

    const { 
      modalValue: {
        setModalState, modalState
      },
      global: {
        type, getData
      },
    } = useAppContext();

    const { TextArea } = Input;

    const [content, setContent] = useState(
      {
        title: "",
        content: "",
        type: "todo",
      },
    );

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      const data = {...content}
      data[name] = value
      setContent(data)
    }


    const onSubmit = async () => {
      try {
        let response = await API.createOrUpdateData(type, content);
        if(response.status >= 200 || response.status <= 299) {
          setContent({
            title: "",
            content: "",
            type: "todo"
          });
          setModalState(false);
          message.destroy();
          message.success("Data added successfully");
  
        }

        else {
          message.destroy();
          message.error("Something went wrong")
        }

        getData("todo");

      }
      
      catch (e) {

      }
    }

    useEffect(() => {
      setContent({
        title: "",
        content: "",
        type: "todo"
      });
    }, [modalState])

    return (
        <div className="form-div">
          <div className="input-div">
            <span>
              Task title:
            </span>
            <Input type="text" name="title" placeholder="Title" onChange={handleOnChange} />
          </div>
          <div className="input-div">
            <span>
              Task content:
            </span>
            <TextArea name="content" onChange={handleOnChange} />
          </div>
          <button className="btn-task" onClick={onSubmit}>
            Create
          </button>
        </div>
    );

}

export default TodoForm;
