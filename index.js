/******************************** CONSULTATION FORM ********************************/
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


/******************************** COMMENTS FORM ********************************/
function saveComment(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var blogId = document.getElementById('blogId').value;
    var comment = document.getElementById('comment').value;
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var website = document.getElementById('website').value;

    // Validate form fields
    if (!blogId || !comment || !email || !name || !website) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return; // Stop the form from being submitted
    }

    var CommentForm = {
        blogId: blogId,
        comment: comment,
        email: email,
        name: name,
        website: website
    };

    console.log("Sending data:", CommentForm); // Log the data being sent

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/auth/save-comment", {
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
        console.log("Response received:", json);
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

function saveContractForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var companyName = document.getElementById('companyName').value;
    var website = document.getElementById('website').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var location = document.getElementById('location').value;
    var purpose = document.getElementById('purpose').value;
    var contract = document.getElementById('contract').value;
    var areaSqft = document.getElementById('areaSqft').value;

    // Validate form fields
    if (!companyName || !website || !phoneNumber || !location || !purpose || !contract || !areaSqft) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return; // Stop the form from being submitted
    }

    // Validate phone number to contain only numbers
    var phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phoneNumber)) {
        Swal.fire({
            title: 'Error!',
            text: 'Phone number should contain only numbers.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return; // Stop the form from being submitted
    }

    var contractFormData = {
        companyName: companyName,
        website: website,
        phoneNumber: phoneNumber,
        location: location,
        purpose: purpose,
        contract: contract,
        areaSqft: areaSqft
    };

    console.log("Sending data:", contractFormData); // Log the data being sent

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/auth/save-quote", {
        method: 'POST',
        body: JSON.stringify(contractFormData),
        headers: headers,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log("Response received:", json);
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


