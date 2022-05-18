import React,{useRef} from 'react';
import imagenFondo from '../assets/images/img-product.jpg';
import CategorysInDb from './CategorysInDb';
import ContentRowProducts from './ContentRowProducts';
function ContentRowTop(){

	const parrafo = useRef()

	const cambiarColor = () => {
		parrafo.current.classList.toggle('bg-danger')
	};


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					{/*<!-- Content Row Products-->*/}
					<ContentRowProducts />
					{/*<!-- End Products in Data Base -->*/}

					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 onMouseOver={cambiarColor} className="m-0 font-weight-bold text-gray-800">Last Product in DataBase</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="Producto - Hibox "/>
									</div>
									<p ref={parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Categorys in DB -->*/}
						<CategorysInDb />

						{/*<!--End Categorys In Db-->*/}
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;