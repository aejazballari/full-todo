import React, {useEffect, useRef} from 'react'

function AddTodo() {
  // useEffect(() => {
  //   var myModal = document.getElementById('myModal')
  //   var myInput = document.getElementById('myInput')
    
  //   myModal.addEventListener('shown.bs.modal', function () {
  //     myInput.focus()
  //   })
  // })
  return (
   <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default AddTodo