import styles from './index.module.scss';
import { useState, useEffect } from 'react';

export default function ContactBox({ contact }) {
    const [isLinkedIn, setIsLinkedIn] = useState(false);
    const [isEmail, setIsEmail] = useState(false);

    const setContact = (contact) => {
        const contact_lowerCase = contact.toLowerCase();

        switch(contact_lowerCase) {
            case "linkedin":
                setIsLinkedIn(true);
                break;

            case "email":
                setIsEmail(true);
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        setContact(contact);
    }, []);

    if(isLinkedIn) {
        return (
            <div className={styles.contact}>
                <div className={styles.contact_icon}>
                    <i className='fa-brands fa-linkedin'></i>
                </div>
                <div className={styles.contact_content}>
                    <p>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/erhan-002/" target='_blank'>Send me a message</a>
                </div>
            </div>
        );
    }

    if(isEmail) {
        return (
            <div className={styles.contact}>
                <div className={styles.contact_icon}>
                    <i className='fa-solid fa-envelope'></i>
                </div>
                <div className={styles.contact_content}>
                    <p>Email</p>
                    <a href="mailto:erhanulusal@hotmail.com" target='_blank'>erhanulusal@hotmail.com</a>
                </div>
            </div>
        );
    }
}
