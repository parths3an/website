var modal = document.getElementById('simpleModal');

function openModal() {
  console.log(123);
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}
//Functions outside the model: for the confirmed
function editReq() {
  openModal();
  setTimeout(closeModal,3000);
  
  /*var updateInfoBtn = document.getElementById('');
  updateInfoBtn.addEventListener('click', showUpdatedInfo);
*/
}

//Functions Inside the modal
function showUpdatedInfo() {
  /*
    document.getElementById("dateInput").addEventListener("change", function () {
      var input = this.value;
      var dateEntered = new Date(input);
      console.log(input);
      alert('Okay this works!');
      console.log(dateEntered);
    });
  */
  closeModal();
}

function deleteReqS1()
{
  closeModal();
  var confirmReq = document.getElementById('confirmedReq');
  confirmReq.style.visibility = 'hidden';
}

function deleteReqS2()
{
  closeModal();
  var pendingReq = document.getElementById('pendingReq');
  pendingReq.style.visibility = 'hidden';
}
