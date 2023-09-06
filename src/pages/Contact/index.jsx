import styles from './index.module.scss';
import { ContactBox } from '../../components';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contact_content}>
                <div className={styles.contact_title}>
                    <h2><span>Contact</span></h2>
                    <p>Get in contact with me from any of the options below 👇</p>
                </div>

                <div className={styles.contact_boxes}>
                    <ContactBox contact={"LinkedIn"} />
                    <ContactBox contact={"Email"} />
                </div>
            </div>
        </section>
    );
}
