import React from 'react'

function WorkInProgress({date}) {
  return (
    <>
        <div>
      <div>

      <section className="projects" id="projects">
        <h1 className="heading">
          {" "}
          Work In <span>progress</span>{" "}
        </h1>
        <div className="complited-till">
            <h2 className='cmptill'>
                Completed till Date : 
            </h2>
            <h2 className='datee'>
                 {date}
            </h2>

        </div>
        
      </section>
            </div>
    </div>

    </>
  )
}

export default WorkInProgress

