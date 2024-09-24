import style from '../Contact.module.css'
import emailjs from 'emailjs-com';



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkValidations(IP) {
    if (IP.value === '') {
        IP.placeholder = 'Please fill this field!';
        IP.classList.add(style.warning);
        return false;
    }

    else if (IP.type === 'email') {
        if (!emailRegex.test(IP.value)) {
            IP.value = '';
            IP.placeholder = 'Please enter a valid email address!';
            IP.classList.add(style.warning);
            return false;
        }
    }

    IP.classList.remove(style.warning);
    return true;
}



export const handelClick = function (nameIP, emailIP, subjectIP, bodyIP, setSent) {
    const checkName = checkValidations(nameIP);
    const checkEmail = checkValidations(emailIP);
    const checkSubject = checkValidations(subjectIP);
    const checkBody = checkValidations(bodyIP);
    if (checkName && checkEmail && checkSubject && checkBody) {
        console.log('pass');

        const templateParams = {
            subject: subjectIP.value,
            name: nameIP.value,
            message: bodyIP.value,
            user_email: emailIP.value
        }

        nameIP.value = '';
        nameIP.placeholder = 'Name';

        emailIP.value = ''
        emailIP.placeholder = 'Email';

        subjectIP.value = ''
        subjectIP.placeholder = 'Subject';

        bodyIP.value = ''
        bodyIP.placeholder = 'Message';

        emailjs.send("service_s1ttztm", "template_htrnwqk", templateParams, 'XHAFzFUVSzFIMWUX5')
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                setSent("true");
            })
            .catch(error => {
                console.error('FAILED...', error);
                setSent("false");
            })
    }
    else console.log("did not");

}