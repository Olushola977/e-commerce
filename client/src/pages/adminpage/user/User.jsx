import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { LadyStyle1 } from 'images'
import './User.css'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="createUser">Create User</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={LadyStyle1} alt="" className="userShowImg" />
                    <div className="userShowTopTotal">
                        <span className="userShowLocation">Anna Becker</span>
                        <span className="userShowUserTitle">Mimi Collections</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">10.11.1989</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+23480 8180 6271</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">New York - USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='annabeck' className='userUpdateInput' />

                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Anna Becker' className='userUpdateInput' />

                        </div>
                        <div className="userUpdateItem">
                            <label>Date</label>
                            <input type="date" placeholder='DOB' className='userUpdateInput' />
                            
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone Number</label>
                            <input type="number" placeholder='Phone Number' className='userUpdateInput' />
                            
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder='annabeck@gmail.com' className='userUpdateInput' />
                            
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='New York - USA' className='userUpdateInput' />
                            
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={LadyStyle1} alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish /></label>
                            <input type="file" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User