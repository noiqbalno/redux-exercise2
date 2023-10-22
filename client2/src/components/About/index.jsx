import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailUser } from '../../actions/userAction';

const About = () => {
  const token = Cookies.get('accessToken');
  let userId = '';
  if (token) {
    const decode = jwt_decode(token);
    userId = decode.id;
  }

  const { getDetailUserResult, getDetailUserLoading, getDetailUserError } =
    useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log('useeffeect post');
    dispatch(getDetailUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <div className="container py-4">
        <div className="mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">About</h1>
            <p className="col-md-8 fs-4">
              Perkenalkan saya adalah lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos quidem voluptas sed. Quisquam suscipit
              libero ipsam iste, accusantium facilis fuga maxime possimus animi
              repellendus provident itaque est, asperiores ratione a ratione .
            </p>
          </div>
        </div>
        {getDetailUserResult ? (
          <>
            <div className="col-md-12">
              <h5>Data diri</h5>

              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="col-md-2">Nama: </td>
                    <td>{getDetailUserResult.data.nama}</td>
                  </tr>
                  <tr>
                    <td>Alamat: </td>
                    <td>{getDetailUserResult.data.alamat}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-12">
              <h5>Pendidikan</h5>

              <table className="table table-bordered">
                <tbody>
                  {getDetailUserResult &&
                    getDetailUserResult.data.pendidikans.map((item, index) => (
                      <tr key={index}>
                        <td className="col-md-2">{item.jenis} </td>
                        <td>{item.nama_pendidikan}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-12">
              <h5>Organisasi</h5>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Organisasi</th>
                    <th>Jabatan</th>
                  </tr>
                </thead>
                <tbody>
                  {getDetailUserResult &&
                    getDetailUserResult.data.organisasis.map((item, index) => (
                      <tr key={index}>
                        <td className="col-md-3">{item.organisasi} </td>
                        <td>{item.sebagai}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-12">
              <h5>Pengalaman Kerja</h5>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Perusahaan</th>
                    <th>Jabatan</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {getDetailUserResult &&
                    getDetailUserResult.data.pengalamans.map((item, index) => (
                      <tr key={index}>
                        <td className="col-md-3">{item.perusahaan} </td>
                        <td>{item.sebagai}</td>
                        <td>{item.keterangan}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        ) : getDetailUserLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getDetailUserError ? getDetailUserError : 'Data Kosong'}</p>
        )}
      </div>
    </>
  );
};

export default About;
