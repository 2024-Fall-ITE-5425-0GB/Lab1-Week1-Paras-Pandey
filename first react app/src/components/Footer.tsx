type FooterProps={
    title:String;

}
function Footer(props:FooterProps){
    return(
        <h3>{props.title}</h3>
    );
}

export default Footer;