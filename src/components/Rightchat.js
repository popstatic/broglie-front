import React,{Component} from 'react';

const chatMember = [
    {
        imageUrl: 'user.png',
        name: 'Grégoire de Broglie',
        status: 'bg-success'
    },
    {
        imageUrl: 'user.png',
        name: 'Alain de Broglie',
        status: 'bg-success'
    },
    {
        imageUrl: 'user.png',
        name: 'Henry de Boisseguin',
        status: 'bg-warning'
    },
    {
        imageUrl: 'user.png',
        name: 'Isabelle de Broglie',
        status: 'bg-danger'
    }
]

class Rightchat extends Component {
    state = {
        isOpen: false
    };

    constructor() {
        super();
        this.state = {
          width:  800,
          height: 182
        }
      }
    
      /**
       * Calculate & Update state of new dimensions
       */
      updateDimensions() {
        if(window.innerWidth < 500) {
          this.setState({ width: 450, height: 102 });
        } else {
          let update_width  = window.innerWidth-100;
          let update_height = Math.round(update_width/4.4);
          this.setState({ width: update_width, height: update_height });
        }
      }
    
      /**
       * Add event listener
       */
      componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
      }
    
      /**
       * Remove event listener
       */
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
      }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        
        const menuClass = `${this.state.isOpen ? " d-block" : ""}`;

        return (
            
            <div id="main-content-wrap" className={`right-chat nav-wrap mt-2 right-scroll-bar ${this.state.width > 1500 ? "active-sidebar" : " "}`}>
                <div className="middle-sidebar-right-content bg-white shadow-xss ">

                    <div className="section full pe-3 ps-4 pt-4 position-relative feed-body">
                        <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">En ligne</h4>
                        <ul className="list-group list-group-flush">

                            {chatMember.map((value , index) => (
                                // Start Single Demo 
                                <li  key={index} className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                                    <figure className="avatar float-left mb-0 me-2">
                                        <img src={`assets/images/${value.imageUrl}`} alt="avater" className="w35" />
                                    </figure>
                                    <h3 className="fw-700 mb-0 mt-0">
                                        <span className="font-xssss text-grey-600 d-block text-dark model-popup-chat pointer" onClick={this.toggleOpen}>{value.name}</span>
                                    </h3>
                                    <span className={`${value.status} ms-auto btn-round-xss`}></span>
                                </li>
                                // End Single Demo 
                            ))}
                            
                        </ul>
                    </div>



                </div>

                <div className={`modal-popup-chat ${menuClass}`}>
                    <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
                        <div className="modal-popup-header w-100 border-bottom">
                            <div className="card p-3 d-block border-0 d-block">
                                <figure className="avatar mb-0 float-left me-2">
                                    <img src="assets/images/user-12.png" alt="avata r" className="w35 me-1" />
                                </figure>
                                <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">Alain de Broglie</h5>
                                <h4 className="text-grey-500 font-xsssss mt-0 mb-0"><span className="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                                <div className="font-xssss position-absolute right-0 top-0 mt-3 me-4 pointer" onClick={this.toggleOpen}><i className="ti-close text-grey-900 mt-2 d-inline-block"></i></div>
                            </div>
                        </div>
                        <div className="modal-popup-body w-100 p-3 h-auto">
                            <div className="message"><div className="message-content font-xssss lh-24 fw-500">Coucou</div></div>
                            <div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">Mon 10:20am</div>
                            <div className="message self text-right mt-2"><div className="message-content font-xssss lh-24 fw-500">Hey bonjour</div></div>
                            <div className="snippet pt-3 ps-4 pb-2 pe-3 mt-2 bg-grey rounded-xl float-right" data-title=".dot-typing"><div className="stage"><div className="dot-typing"></div></div></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="modal-popup-footer w-100 border-top">
                            <div className="card p-3 d-block border-0 d-block">
                                <div className="form-group icon-right-input style1-input mb-0"><input type="text" placeholder="Tappez ici ..." className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3" /><i className="feather-send text-grey-500 font-md"></i></div>
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>

            


            

        );
    }
}

export default Rightchat;