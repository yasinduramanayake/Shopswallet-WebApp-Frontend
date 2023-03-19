<template>
	<nav class="mb-4" style="background-image: url('/img/mushroom.jpg'); height:500px; width: auto; background-repeat: no-repeat; background-position: center;">
		<div class="container">
			<div class="text-center text-white" style="padding-top: 180px;">
				<div class="fs-1">
					{{ $t("RideWithUs.Header") }}
				</div>
				<div class="fs-5 text-uppercase text-bold mb-3">
					{{ $t("RideWithUs.SubHeader") }}
				</div>
				<div>
					<a href="/register" class="btn btn-warning rounded-0 text-lead text-white text-uppercase">
						{{ $t("RideWithUs.Button") }}
					</a>
				</div>
			</div>
		</div>
	</nav>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
					<ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
  						<li class="nav-item" role="presentation">
    						<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{{ $t("RideWithUs.Tab1Header") }}</button>
  						</li>
  						<li class="nav-item" role="presentation">
    						<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{{ $t("RideWithUs.Tab2Header") }}</button>
  						</li>
  						<li class="nav-item" role="presentation">
    						<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{{ $t("RideWithUs.Tab3Header") }}</button>
  						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
  						<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  							<h2 class="text-center text-uppercase mt-4">{{ $t("RideWithUs.Tab1ContentHeader") }}</h2>
  							<div class="text-center text-muted fst-italic mb-5">{{ $t("RideWithUs.Tab1ContentSubHeader")}}</div>
  							<div class="row text-center">
  								<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
  									<div class="rounded-circle bg-dark d-flex justify-content-center align-content-center flex-wrap mb-3 mx-auto" style="width: 100px; height: 100px; font-size: 50px;">
  										<font-awesome-icon icon="fa-solid fa-rocket" class="text-white" />
  									</div>

  									<h5>{{ $t("RideWithUs.Tab1ContentRow1Header")}}</h5>

  									<div class="text-muted">
										{{ $t("RideWithUs.Tab1ContentRow1Content")}}	
  									</div>
  								</div>
  								<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
  									<div class="rounded-circle bg-dark d-flex justify-content-center align-content-center flex-wrap mb-3 mx-auto" style="width: 100px; height: 100px; font-size: 50px;">
  										<font-awesome-icon icon="fa-solid fa-tablet-screen-button" class="text-white" />
  									</div>

  									<h5>{{ $t("RideWithUs.Tab1ContentRow2Header")}}</h5>

  									<div class="text-muted">
										{{ $t("RideWithUs.Tab1ContentRow2Content")}} 
  									</div>
  								</div>
  								<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
  									<div class="rounded-circle bg-dark d-flex justify-content-center align-content-center flex-wrap mb-3 mx-auto" style="width: 100px; height: 100px; font-size: 50px;">
  										<font-awesome-icon icon="fa-solid fa-credit-card" class="text-white" />
  									</div>

  									<h5>{{ $t("RideWithUs.Tab1ContentRow3Header ")}}</h5>

  									<div class="text-muted">
										{{ $t("RideWithUs.Tab1ContentRow3Content")}}	
  									</div>
  								</div>
  							</div>
  						</div>
  						<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
  							<h2 class="text-center text-uppercase mt-4">{{ $t("RideWithUs.Tab2ContentHeader") }}</h2>
  							<div class="text-center text-muted fst-italic mb-5">{{ $t("RideWithUs.Tab2ContentSubHeader") }}</div>

  							<div class="row">
  								<div class="col-4 text-end" style="margin-bottom: 120px;">
  									<h5>{{ $t("RideWithUs.Tab2Contentlistitem1Header") }}</h5>
  									<div class="text-end text-muted">
										{{ $t("RideWithUs.Tab2Contentlistitem1Content") }} 
  									</div>
  								</div>
  								<div class="col-4 d-flex justify-content-center" style="margin-bottom: 120px;">
  									<div class="rounded-circle" style="background-image: url('/img/time_line_step_1.png'); height: 170px; width: 170px; background-repeat: no-repeat; background-position: center; background-size: contain; border: 7px solid #f1f1f1;"></div>
  								</div>
  								<div class="col-4" style="margin-bottom: 120px;"></div>

  								<div class="col-4" style="margin-bottom: 120px;"></div>
  								<div class="col-4 d-flex justify-content-center" style="margin-bottom: 120px;">
  									<div class="rounded-circle" style="background-image: url('/img/time_line_step_2.png'); height: 170px; width: 170px; background-repeat: no-repeat; background-position: center; background-size: contain; border: 7px solid #f1f1f1;"></div>
  								</div>
  								<div class="col-4 text-start" style="margin-bottom: 120px;">
  									<h5>{{ $t("RideWithUs.Tab2Contentlistitem2Header") }}</h5>
  									<div class="text-start text-muted">
										{{ $t("RideWithUs.Tab2Contentlistitem2Content") }} 
  									</div>
  								</div>

  								<div class="col-4 text-end" style="margin-bottom: 120px;">
  									<h5>{{ $t("RideWithUs.Tab2Contentlistitem3Header") }}</h5>
  									<div class="text-end text-muted">
  										{{ $t("RideWithUs.Tab2Contentlistitem3Content") }}
  									</div>
  								</div>
  								<div class="col-4 d-flex justify-content-center" style="margin-bottom: 120px;">
  									<div class="rounded-circle" style="background-image: url('/img/time_line_step_3.png'); height: 170px; width: 170px; background-repeat: no-repeat; background-position: center; background-size: contain; border: 7px solid #f1f1f1;"></div>
  								</div>
  								<div class="col-4" style="margin-bottom: 120px;"></div>

  								<div class="col-4" style="margin-bottom: 120px;"></div>
  								<div class="col-4 d-flex justify-content-center" style="margin-bottom: 120px;">
  									<div class="rounded-circle" style="background-image: url('/img/time_line_step_4.png'); height: 170px; width: 170px; background-repeat: no-repeat; background-position: center; background-size: contain; border: 7px solid #f1f1f1;"></div>
  								</div>
  								<div class="col-4 text-start" style="margin-bottom: 120px;">
  									<h5>{{ $t("RideWithUs.Tab2Contentlistitem4Header") }}Get Paid Instantly</h5>
  									<div class="text-start text-muted">
										{{ $t("RideWithUs.Tab2Contentlistitem4Content") }}
  									</div>
  								</div>

  								<div class="col-4"></div>
  								<div class="col-4 d-flex justify-content-center">
  									<div class="rounded-circle text-uppercase text-center text-white d-flex justify-content-center align-items-center" style="width: 170px; height: 170px; background-color: #fed136; border: 7px solid #f1f1f1;">
  										<h4 style="font-size: 18px; font-weight: 700; line-height: 26px;">
  											{{ $t("RideWithUs.Tab2Contentlistitem4Content1") }} <br/>
											{{ $t("RideWithUs.Tab2Contentlistitem4Content2") }} <br/>
											{{ $t("RideWithUs.Tab2Contentlistitem4Content3") }}
  										</h4>
  									</div>
  								</div>
  								<div class="col-4 text-start"></div>
  							</div>
  						</div>
  						<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
  							<h2 class="text-center text-uppercase mt-4">{{ $t("BecomeAseller.FaqMainHeader") }}</h2>
  							<div class="text-center text-muted fst-italic mb-5">
  								{{ $t("BecomeAseller.FaqSubHeader") }}
  							</div>

  							<div class="row">
  								<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
  									<div class="fs-3 mb-4">{{ $t("RideWithUs.FaqHeader1") }}</div>
  									<div class="accordion" id="accordionExample1">
  										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading1">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
										        	{{ $t("RideWithUs.FaqAccordian1Header") }}
										      	</button>
										    </h2>
										    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample1">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian1Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading2">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
										        	{{ $t("RideWithUs.FaqAccordian2Header") }}
										      	</button>
										    </h2>
										    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample1">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian2Body") }}
											        	<ul style="list-style-type: circle;">
											        		<li>{{ $t("RideWithUs.FaqAccordian2BodyLi1") }}</li>
											        		<li>{{ $t("RideWithUs.FaqAccordian2BodyLi2") }}</li>
											        		<li>{{ $t("RideWithUs.FaqAccordian2BodyLi3") }}</li>
											        	</ul>
										        	</small>
										      	</div>
										    </div>
										</div>
										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading3">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
										        	{{ $t("RideWithUs.FaqAccordian3Header") }}
										      	</button>
										    </h2>
										    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample1">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian3Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
  									</div>
  								</div>

  								<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
  									<div class="fs-3 mb-4">{{ $t("RideWithUs.FaqHeader2") }}</div>
  									<div class="accordion" id="accordionExample2">
  										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading4">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
										        	{{ $t("RideWithUs.FaqAccordian4Header") }}
										      	</button>
										    </h2>
										    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample2">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian4Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading5">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
										        	{{ $t("RideWithUs.FaqAccordian5Header") }}
										      	</button>
										    </h2>
										    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample2">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian5Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading6">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
										        	{{ $t("RideWithUs.FaqAccordian6Header") }}
										      	</button>
										    </h2>
										    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample2">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian6Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading7">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
										        	{{ $t("RideWithUs.FaqAccordian7Header") }}
										      	</button>
										    </h2>
										    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample2">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian7Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
  									</div>
  								</div>

  								<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
  									<div class="fs-3 mb-4">{{ $t("RideWithUs.FaqHeader3") }}</div>
  									<div class="accordion" id="accordionExample3">
  										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading8">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="true" aria-controls="collapse8">
										        	{{ $t("RideWithUs.FaqAccordian8Header") }}
										      	</button>
										    </h2>
										    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample3">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian8Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
										<div class="accordion-item">
										    <h2 class="accordion-header" id="heading9">
										     	<button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
										        	{{ $t("RideWithUs.FaqAccordian9Header") }}
										      	</button>
										    </h2>
										    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample3">
										      	<div class="accordion-body" style="text-align: justify;">
										        	<small>
										        		{{ $t("RideWithUs.FaqAccordian9Body") }}
										        	</small>
										      	</div>
										    </div>
										</div>
  									</div>
  								</div>
  							</div>
  						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>

</script>

<style scoped>
	.nav-link {
		color: #666;
	}
	/*.project-tab {
	    padding: 10%;
	    margin-top: -8%;
	}
	.project-tab #tabs{
	    background: #007b5e;
	    color: #eee;
	}
	.project-tab #tabs h6.section-title{
	    color: #eee;
	}*/
	.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
	    color: #0062cc;
	    background-color: transparent;
	    border-color: transparent transparent #f3f3f3;
	    border-bottom: 3px solid !important;
	    font-size: 16px;
	    font-weight: bold;
	}
	/*.project-tab .nav-link {
	    border: 1px solid transparent;
	    border-top-left-radius: .25rem;
	    border-top-right-radius: .25rem;
	    color: #0062cc;
	    font-size: 16px;
	    font-weight: 600;
	}
	.project-tab .nav-link:hover {
	    border: none;
	}
	.project-tab thead{
	    background: #f3f3f3;
	    color: #333;
	}
	.project-tab a{
	    text-decoration: none;
	    color: #333;
	    font-weight: 600;
	}*/
	.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
		color: #0062cc;
	    background-color: transparent;
	    border-color: transparent transparent #f3f3f3;
	    border-bottom: 3px solid !important;
	    font-size: 16px;
	    font-weight: bold;
	}
</style>
