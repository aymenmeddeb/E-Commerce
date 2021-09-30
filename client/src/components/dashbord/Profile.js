import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap'
import {changeUser, CurrentUser,ToglleActionTrue,editUser} from "../../js/action/users"
import "./style.css"

const Profile = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector(state => state.userReducer.user)
    const edit = useSelector(state => state.userReducer.edit);
    const [users, setUsers] = useState({name:"",lastname:"",email:"",adresse:"",phone:"",company:""});
    const dispatch = useDispatch()
    useEffect(() => {
        edit ? setUsers(user):setUsers({name:"",lastname:"",email:""})
      
    }, [edit,user])
    const handlechange=async(e)=>{
        e.preventDefault();
        await  setUsers({...users,[e.target.name]:e.target.value});
    }
    const handleclik=async(e)=>{
        await dispatch(changeUser(user._id,users));
        handleClose();
    }
    return (
        <div>
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX?format=jpg&name=small" alt="" />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h2>
                                    {user.name} {user.lastname}
                                </h2>
                                <h6>
                                    { }
                                </h6>
                                <p className="proile-rating"> <span></span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">

                                    </li>
                                    <li className="nav-item">

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">

                            <Button variant="null" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"   onClick={async()=>{
                               await setShow(true); dispatch(ToglleActionTrue());
                                  dispatch(editUser(user._id))}} >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label> Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>LastName</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.lastname}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Adresse</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.adresse}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Company</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Modal size="xl" show={show} onHide={handleClose} dialogClassName="modal-190w">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body><div>
                    <div className="container bootstrap snippets bootdey">
                        <h1 className="text-primary"><span className="glyphicon glyphicon-user" />Edit Profile</h1>
                        <hr />
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-3">
                                <div className="text-center">
                                    <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
                                    <h6>Upload a different photo...</h6>
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                            {/* edit form column */}
                            <div className="col-md-9 personal-info">

                                <h3>Personal info</h3>
                                <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">First name:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text" onChange={handlechange}  name="name" value={users.name}  /></div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Last name:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text" onChange={handlechange} name="lastname" value={users.lastname}  />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Company:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" name="company" onChange={handlechange} type="text" value={users.company}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Email:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" onChange={handlechange} type="text" name="email" value={users.email}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">adresse:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" onChange={handlechange} type="text" name="adresse" value={users.adresse}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">phone:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" name="phone" type="text" onChange={handlechange} value={users.phone}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleclik}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Profile
