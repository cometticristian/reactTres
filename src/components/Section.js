import React from 'react';
import RowPrices from '../components/RowPrices';
import Categories from './Categories';

function Section() {
	return (
		<div className="container-fluid">

			
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			<RowPrices />

			<div className="row">
				
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
						</div>
						<div className="card-body">
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="product_dummy.svg" alt="dummy" />
							</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
							<a target="_blank" rel="nofollow" href="/">View product detail</a>
						</div>
					</div>
				</div>

				<Categories/>

			</div>


			<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>


			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
									<th>Categories</th>
									<th>Colors</th>
									<th>Stock</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
									<th>Categories</th>
									<th>Colors</th>
									<th>Stock</th>
								</tr>
							</tfoot>
							<tbody>
								<tr>
									<td>Tiger Nixon</td>
									<td>System Architect</td>
									<td>$320,800</td>
									<td>
										<ul>
											<li>Category 01</li>
											<li>Category 02</li>
											<li>Category 03</li>
										</ul>
									</td>
									<td>
										<ul>
											<li><span className="text-danger">Red</span></li>
											<li><span className="text-primary">Blue</span></li>
											<li><span className="text-success">Green</span></li>
										</ul>
									</td>
									<td>245</td>
								</tr>
								<tr>
									<td>Jane Doe</td>
									<td>Fullstack developer</td>
									<td>$320,800</td>
									<td>
										<ul>
											<li>Category 01</li>
											<li>Category 02</li>
											<li>Category 03</li>
										</ul>
									</td>
									<td>
										<ul>
											<li><span className="text-danger">Red</span></li>
											<li><span className="text-primary">Blue</span></li>
											<li><span className="text-success">Green</span></li>
										</ul>
									</td>
									<td>245</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>



		</div>
	);
}

export default Section