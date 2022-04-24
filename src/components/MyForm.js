import React from 'react'

function MyForm() {

    const handleSubmit = (e) => {
        e.preventDefault()

        const fd = new FormData(document.forms['myForm'])
        const dataArr = [...fd]
        console.log(dataArr)
    }

  return (
    <div>
        <form name='myForm'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' />

            <label htmlFor="age">Age</label>
            <input type="number" name='age' id='age' min={10} />

            <label htmlFor="file">Upload file</label>
            <input type="file" name='file' id='file' /> <br />

            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default MyForm