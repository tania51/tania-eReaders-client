import Button from "../Button";
import Title from "../Title";


const ContactUs = () => {
    return (
        <div className="px-28 py-20">
            <div className="text-center">
                <Title>Send Us a Message</Title>
            </div>
            <form className="card-body px-14 py-12 bg-rose-100 rounded-2xl night-form">
                <div className="flex gap-6">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="text" placeholder="Name" className="input" required />

                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" placeholder="Email" className="input" required />

                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="text" placeholder="Phone" className="input" required />

                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <Button>Send Message</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;