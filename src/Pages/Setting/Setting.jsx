import Sidebar from '../../Components/Sidebar/Sidebar'
import './Setting.css'

export default function Setting() {
  return (
    <div className='setting'>
        <div className='settingWrapper'>
            <div className='settingTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Pictures</label>
                <div className='settingsPP'>
                    <img className='settingsImg' src='https://bit.ly/3HL4jLn' alt=''/>
                    <label htmlFor='fileInput'>
                        <i className="settingIcon fas fa-user-circle"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}}/>
                </div>
                <label>Username</label>
                <input type='text' placeholder='smiling'/>

                <label>Email</label>
                <input type='text' placeholder='smiling@gmail.com'/>

                <label>Password</label>
                <input type='password' placeholder='****' />

                <button className='settingSubmit'>Update</button>
            </form>
        </div>
      <Sidebar/>
    </div>
  )
}
