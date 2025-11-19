import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
           <img 
           className="footer-img"
           src = "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/7/b/8/7b8dd7b2756d8c008e7482a4610e67a108244e59_2_690x250.png"
           />
        </footer>
    )
}


export default Footer;
