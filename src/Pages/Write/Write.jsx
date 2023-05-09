import './Write.css'

export default function Write() {
  return (
    <div className='write'> 
        <img className='writeImg' src='https://bit.ly/42o1iIO' alt=''/>
       <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
                <input  className='writeInput' type='text' placeholder='Title' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell us your Story......' type='text' className='writeInput writeText'></textarea>
            </div>
        
            <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
