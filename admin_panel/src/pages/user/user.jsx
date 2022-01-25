import "./user.css";
import {
  PermIdentity, CalendarToday, MailOutline, PhoneAndroid,
  LocationSearching, Publish
} from '@mui/icons-material';
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddBtn">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">

          <div className="userShowTop">

            <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="userpro" className="userShowImg" />

            <div className="userShowTopTitle">
              <span className="userShowUserName">Jenushanth Sivakumar</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Jenushanth95</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">1995-01-10</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+0 73 3456710</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">abc@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Eastern |Srilanka</span>
            </div>

          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label >Username</label>
                <input type="text"
                  placeholder="Jenushanth95"
                  className="userUpdateInput" />
              </div>
              
              <div className="userUpdateItem">
                <label >Full Name</label>
                <input type="text"
                  placeholder="Jenushanth Sivakumar"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Phone</label>
                <input type="text"
                  placeholder="+0 73 3456710"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Email</label>
                <input type="text"
                  placeholder="abc@gmail.com"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label >Address</label>
                <input type="text"
                  placeholder="Eastern |Srilanka"
                  className="userUpdateInput" />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="userpro2" className="userUpdateImg" />
                <label htmlFor="file"><Publish/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
