import  './SinglePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlepostWrapper'>
        <img className='singlepostImg' src='https://bit.ly/3HMpjRO' alt=''/>
        <h1 className='singlepostTitle'>In publishing and graphic design
            <div className='singlepostEdit'>
                <i className="singlepostIcon far fa-edit"></i>
                <i className="singlepostIcon fas fa-trash-alt"></i>
            </div>
        </h1>
        <div className='singlepostInfo'>
            <span className='singlepostAuthor'>Author: <b>Smilin</b></span>
            <span className='singlepostDate'>1 hour ago</span>
            
        </div>
        <p className='singlepostDesc'>In publishing and graphic design, Lorem ipsum is a placeholder
         text commonly used to demonstrate the visual form of a  document or a typeface
          without relying on meaningful content. Lorem ipsum may be used as a placeholder
           before final copy is available. It is also used to temporarily replace text in a 
           process called greeking, which allows designers to consider the form of a webpage 
           or publication, without the meaning of the text influencing the design.Lorem ipsum 
           is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC
           text by the Roman statesman and  philosopher Cicero, with words altered, added, and
           removed to make it nonsensical and improper Latin.In publishing and graphic design, 
           Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a 
           document or a typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. It is also used to temporarily 
            replace text in a process called greeking, which allows designers to consider the form
            of a webpage or publication, without the meaning of the text influencing the design.
            Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 
            1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,
            added, and removed to make it nonsensical and improper Latin.</p>
      </div>
    </div>
  )
}
