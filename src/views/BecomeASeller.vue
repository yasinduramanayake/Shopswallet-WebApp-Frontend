<template>
	<nav class="mb-4" style="background-image: url('/img/mushroom.jpg'); height:500px; width: auto; background-repeat: no-repeat; background-position: center;">
		<div class="container">
			<div class="text-center text-white" style="padding-top: 180px;">
				<div class="fs-1">
					{{ $t("BecomeAseller.Header") }}
				</div>
				<div class="fs-5 text-uppercase text-bold mb-3">
					{{ $t("BecomeAseller.SubHeader") }}
				</div>
				<div>
					<a href="#" class="btn btn-warning rounded-0 text-lead text-white text-uppercase">
						{{ $t("BecomeAseller.Button") }}
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
    						<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{{ $t("BecomeAseller.Tab1Header") }}</button>
  						</li>
  						<li class="nav-item" role="presentation">
    						<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{{ $t("BecomeAseller.Tab2Header") }}</button>
  						</li>
  						<li class="nav-item" role="presentation">
    						<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{{ $t("BecomeAseller.Tab3Header") }}</button>
  						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
  						<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  							<h2 class="text-center text-uppercase mt-4">{{ $t("BecomeAseller.Tab1ContentHeader") }}</h2>
  							<div class="text-center text-muted fst-italic mb-5">{{ $t("BecomeAseller.Tab1ContentSubHeader")}}</div>
  							<div class="row text-center">
  								<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
  									<div class="rounded-circle bg-dark d-flex justify-content-center align-content-center flex-wrap mb-3 mx-auto" style="width: 100px; height: 100px; font-size: 50px;">
  										<font-awesome-icon icon="fa-solid fa-rocket" class="text-white" />
  									</div>

  									<h5>{{ $t("BecomeAseller.Tab1ContentRow1Header")}}</h5>

  									<div class="text-muted">
										{{ $t("BecomeAseller.Tab1ContentRow1Content")}}	
  									</div>
  								</div>
  								<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
  									<div class="rounded-circle bg-dark d-flex justify-content-center align-content-center flex-wrap mb-3 mx-auto" style="width: 100px; height: 100px; font-size: 50px;">
  										<font-awesome-icon icon="fa-solid fa-tablet-screen-button" class="text-white" />
  									</div>

  									<h5>{{ $t("BecomeAseller.Tab1ContentRow2Header")}}</h5>

  									<div class="text-muted">
										{{ $t("BecomeAseller.Tab1ContentRow2Content")}} 
  									</div>
  								</div>
  								<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
  									<div class="rounded-circle bg-dark d-flex justify-content-center align-content-center flex-wrap mb-3 mx-auto" style="width: 100px; height: 100px; font-size: 50px;">
  										<font-awesome-icon icon="fa-solid fa-credit-card" class="text-white" />
  									</div>

  									<h5> 	{{ $t("BecomeAseller.Tab1ContentRow3Header ")}}</h5>

  									<div class="text-muted">
										{{ $t("BecomeAseller.Tab1ContentRow3Content")}}	
  									</div>
  								</div>
  							</div>
  						</div>
  						<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">	{{ $t("BecomeAseller.Tab2Header")}}	</div>
  						<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">	{{ $t("BecomeAseller.Tab3Header")}}</div>
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
