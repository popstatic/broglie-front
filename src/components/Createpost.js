import React,{Component} from 'react';

class Createpost extends Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `${this.state.isOpen ? " show" : ""}`;

        return (
            <div className="card w-100 shadow-xss border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
                <div className="card-body p-0">
                    <a href="/" className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"><i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>Publier quelque chose</a>
                </div>
                <div className="card-body p-0 mt-3 position-relative">
                    <figure className="avatar position-absolute ms-2 mt-1 top-5"><img src="assets/images/user.png" alt="icon" className="shadow-sm rounded-circle w30" /></figure>
                    <textarea name="message" className="h100 bor-0 w-100 p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="..."></textarea>
                </div>
                <div className="card-body d-flex p-0 mt-0">
                    <a href="#photo" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-success feather-image me-2"></i><span className="d-none-xs">Ajouter une Photo/Video</span></a>
                    <a href="/defaulthoteldetails" className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-3 d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200">Publier</a>

                </div>
            </div>
        );
    }
}

export default Createpost;