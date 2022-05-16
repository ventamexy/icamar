import React from 'react';

const FormWork = () => {
    return (
        <>
            <section className="seccion " style={{
                backgroundColor: 'black'
            }}>

                <div className="container">
                    <h2 className="noo-sh-title" style={{ color: '#fff' }}>
                        ¿ERES INGENIERO CIVIL O ARQUITECTO, Y BUSCAS TRABAJO?
                    </h2>
                   
                    <div className="row">
                        <div className="col-lg-6">
                            <p style={{ color: '#fff' }}>
                            Si deseas unirte al equipo, envía tu CV a los siguientes correos:{" "}<br/>
                        <a href="mailto:info@icamar.com">info@icamar.com</a><br />
                        <a href="mailto:construccionlc@yahoo.com">construccionlc@yahoo.com</a>
                    </p>
                        {/* <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Nombre Completo</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Nombre completo..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Dirección</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Nicolás Bravo 341, ..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Ciudad</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">Estado</label>
                                    <input type="text" className="form-control" id="inputState" />
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">C. Postal</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form> */}
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-frame">
                                <img
                                    className="img-thumbnail img-fluid"
                                    src="https://www.elfinanciero.com.mx/resizer/fBB5oKla6lVmz6_B0C2_fLRdaG4=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/TYDKSTNAORGC3AE2AJFLLZEE3Y.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormWork;
