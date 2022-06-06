import MailchimpSubscribe from "react-mailchimp-subscribe";
import WhitelistRequestForm from "./WhitelistRequestForm";

//MERGE7

//MERGE0


const MailchimpFormContainer = props => {

    const postUrl = `https://yclub.us14.list-manage.com/subscribe/post?u=9c396015cc7cb9169fb0eb8a7&id=5cdf3edb3b`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <WhitelistRequestForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;