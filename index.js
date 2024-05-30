/******************************** CONSULTATION FORM ********************************/
// function getForms(){
//     fetch("http://localhost:8080/auth/get-all-contact-list")
//     .then(response => response.json())
//     .then(json => console.log(json))
// }


function saveForm(event) {
    event.preventDefault(); // Prevent form submission

    var consultationForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/auth/save-contact", {
        method: 'POST',
        body: JSON.stringify(consultationForm),
        headers: headers,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error!',
            text: 'There was a problem sending your message.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
}


/******************************** CONTRACT FORM ********************************/

function getContractForms(){
    fetch("http://localhost:8000/ibg-reality/all-contract-forms")
    .then(response => response.json())
    .then(json => console.log(json))
}


function saveContractForm() {
    var newBuildingCheckbox = document.getElementById("tile1");  
    var buildingRenovationCheckbox = document.getElementById("tile2");
    var contract="";
            if (newBuildingCheckbox.checked == true && buildingRenovationCheckbox.checked == true)
            {  
                alert("Please select only one checkbox");
              return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";  
            }  
            else if (newBuildingCheckbox.checked == true){  
              contract = newBuildingCheckbox.value;  
            }   
            else if (buildingRenovationCheckbox.checked == true){  
              contract = buildingRenovationCheckbox.value;  
            }
            
    console.log(JSON.stringify(contract));
    var contractForm = {
        companyName: document.getElementById('companyName').value,
        website: document.getElementById('website').value,
        purpose: document.getElementById('purpose').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        location: document.getElementById('location').value,
        areaSqft: document.getElementById('areaSqft').value,
        contract: contract
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log(JSON.stringify(contractForm));

    fetch("http://localhost:8000/ibg-reality/save-contract-form", {
        method: 'POST',
        body: JSON.stringify(contractForm),
        headers: headers, 
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));
    console.log(JSON.stringify(contractForm));
    alert('Details submitted successfully!')

}


/******************************** COMMENTS FORM ********************************/


// function getComments(){
//     fetch("http://localhost:8080/ibg-reality/all-comments")
//     .then(response => response.json())
//     .then(json => console.log(json))
// }


// function saveComment(){
//     var commentForm = {
//         comment: document.getElementById('comment').value,
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         website: document.getElementById('website').value,
        
//     };

//     console.log(JSON.stringify(commentForm));

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');

//     fetch("http://localhost:8080/auth/save-comment", {
//         method: 'POST',
//         body: JSON.stringify(commentForm),
//         headers: headers,
//     })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error('Error:', error));
// }


function saveComment(event) {
    event.preventDefault(); // Prevent form submission

    var CommentForm = {
        comment: document.getElementById('comment').value,
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        website: document.getElementById('website').value,
        blogId: document.getElementById('blogId').value
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/auth/saveComment", {
        method: 'POST',
        body: JSON.stringify(CommentForm),
        headers: headers,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error!',
            text: 'There was a problem sending your message.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
}
