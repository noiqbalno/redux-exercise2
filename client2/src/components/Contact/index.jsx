import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../actions/contactAction';

const Contact = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [noHp, setNoHp] = useState('');
  const [pesan, setPesan] = useState('');

  const { addContactResult } = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addContactResult) {
      console.log('hilang');
      setNama('');
      setNoHp('');
      setPesan('');
    }
  }, [addContactResult, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addContact({
        nama: nama,
        no_hp: noHp,
        pesan: pesan,
      })
    );
  };
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Mari Menjalin Komunikasi</h1>
            <p className="lead text-body-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              iusto ex doloribus! Impedit hic earum perspiciatis a harum ut
              dolorem rerum. Nesciunt architecto veniam
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid">
            <h1 className="display-7 fw-bold col-md-12">Kontak Kami</h1>
            <div className="row">
              <div className="py-5 col-md-6">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">No. HP</label>
                    <input
                      type="text"
                      className="form-control"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea
                      name="pesan"
                      className="form-control"
                      cols="30"
                      rows="10"
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                  <div className="list-group col-md-12">
                    <a
                      href="/#"
                      className="list-group-item list-group-item-action d-flex gap-3 py-3"
                      aria-current="true"
                    >
                      <img
                        src="https://github.com/twbs.png"
                        alt="twbs"
                        width="32"
                        height="32"
                        className="rounded-circle flex-shrink-0"
                      />
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">Instagram</h6>
                          <p className="mb-0 opacity-75">@instagram.com</p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/#"
                      className="list-group-item list-group-item-action d-flex gap-3 py-3"
                      aria-current="true"
                    >
                      <img
                        src="https://github.com/twbs.png"
                        alt="twbs"
                        width="32"
                        height="32"
                        className="rounded-circle flex-shrink-0"
                      />
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">Twitter</h6>
                          <p className="mb-0 opacity-75">@twitter.com</p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/#"
                      className="list-group-item list-group-item-action d-flex gap-3 py-3"
                      aria-current="true"
                    >
                      <img
                        src="https://github.com/twbs.png"
                        alt="twbs"
                        width="32"
                        height="32"
                        className="rounded-circle flex-shrink-0"
                      />
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">Facebook</h6>
                          <p className="mb-0 opacity-75">@Facebook</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
