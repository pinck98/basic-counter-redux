import React ,{useState} from "react";
import { addUser } from "../../Redux/userSlice";
import { useDispatch
 } from "react-redux";
export default function Form() {
  const [name,setName] = useState('')
  const [eMail,setEMail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({name,eMail}))
  }

  return (
    <div id="form" style={{ width: "70%", float: "right" }}>
      <form onSubmit={handleSubmit} className="ps-2 pe-2 pt-2">
        <input type="email" placeholder="your mail" onChange={e => setEMail(e.target.value)}/>
        <input type="text" placeholder="your name" className="mt-3 mb-3" onChange={e => setName(e.target.value)}/>
        <button type="submit" className="btn btn-primary w-100">
          submit
        </button>
      </form>
    </div>
  );
}
