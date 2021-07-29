import React,{ useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone:'',
    email:'',
    msg:'',
  });

  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name] : value,
      };
    });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello {data.fullname}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1" name="fullname" value={data.fullname} onChange={InputEvent}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1" name="phone" value={data.phone} onChange={InputEvent}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent}
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message" value={data.msg} onChange={InputEvent}
                    id="exampleInputPassword1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">
                    Submit             
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
