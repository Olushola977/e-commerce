import './NewUser.css'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New user</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='John Smith' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='JohnSmith@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Enter Password' />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="number" placeholder='08081806271' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" id='male' value='male' />
                        <label for="male">Male</label>
                        <input type="radio" id='female' value='female' />
                        <label for="female">Female</label>
                        <input type="radio" id='others' value='others' />
                        <label for="others">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className='newUserSelect'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}

export default NewUser