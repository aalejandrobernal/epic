<style>
.services-header {
  background-color:#D20418;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.service-card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  color: #001d3b;
  margin-bottom: 1rem;
}

.section-title {
  color: #001d3b;
  
  padding-left: 1rem;
  margin: 2rem 0 1.5rem 0;
}

.contact-bar {
  background-color: #001d3b;
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
  text-align: center;
}

.contact-bar a {
  color: #ffaa00;
  text-decoration: none;
}

.contact-bar a:hover {
  text-decoration: underline;
}

.badge-epic {
  background-color: #001d3b;
  color: white;
  font-weight: 600;
}

.list-check {
  list-style: none;
  padding-left: 0;
}

.list-check li {
  margin-bottom: 0.5rem;
}

.list-check li i {
  color: #001d3b;
  margin-right: 0.5rem;
}
</style>
<template>
  <!-- Services Header -->
  <div class="services-header">
    <div class="container">
      <h1>Specialized Services</h1>
      <p class="lead mb-0">A competitive restoration company with a highly trained staff, capable of handling small,
        medium, and large projects.</p>
      <p class="mt-3 ">Facade and building restoration & maintenance | Innovation and development</p>
    </div>
  </div>

  <div class="container my-5">
    <!-- Introduction -->
    <div class="row mb-4">
      <div class="col-12 text-center">
        <h1 class="section-title d-inline-block text-home"
          style="border-left: none; padding-bottom: 0.5rem;">Our Services</h1>
        <p class="mt-3 text-home">We are a competitive restoration company with a highly trained staff, allowing us to deliver
          tailored solutions for every project, ensuring structural safety, durability, and aesthetics.</p>
      </div>
    </div>

    <!-- Services in Horizontal Cards (row with columns) -->
    <div class="row g-4">
      <!-- Masonry Work -->
      <div class="col-md-6 col-lg-4">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fa-solid fa-trowel-bricks"></i></div>
            <h3 class="card-title h4">Masonry Work</h3>
            <p class="card-text">Specialists in brickwork and building envelope restoration.</p>
            <ul class="list-check">
              <li><i class="fas fa-check-circle"></i> Brick installation & restoration</li>
              <li><i class="fas fa-check-circle"></i> Repointing (mortar joint replacement)</li>
              <li><i class="fas fa-check-circle"></i> Parapet wall replacement</li>
            </ul>
            <span class="badge badge-epic">Masonry</span>
          </div>
        </div>
      </div>

      <!-- Structural Repairs -->
      <div class="col-md-6 col-lg-4">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-building"></i></div>
            <h3 class="card-title h4">Structural Repairs</h3>
            <p class="card-text">Structural repairs that restore the building's original capacity.</p>
            <ul class="list-check">
              <li><i class="fas fa-check-circle"></i> Lintel replacement</li>
              <li><i class="fas fa-check-circle"></i> Windowsill replacement</li>
              <li><i class="fas fa-check-circle"></i> Eyebrow repair with pin reinforcement</li>
            </ul>
            <span class="badge badge-epic">Structure</span>
          </div>
        </div>
      </div>

      <!-- Sealant Replacement -->
      <div class="col-md-6 col-lg-4">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-fill-drip"></i></div>
            <h3 class="card-title h4">Sealant Replacement</h3>
            <p class="card-text">Removal of failed sealant and installation of new high-performance seals.</p>
            <ul class="list-check">
              <li><i class="fas fa-check-circle"></i> Windows, doors, and joints</li>
              <li><i class="fas fa-check-circle"></i> Facade transitions</li>
              <li><i class="fas fa-check-circle"></i> Air and water infiltration prevention</li>
            </ul>
            <span class="badge badge-epic">Sealants</span>
          </div>
        </div>
      </div>

      <!-- Roofing Replacement -->
      <div class="col-md-6 col-lg-4">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-home"></i></div>
            <h3 class="card-title h4">Roofing Replacement</h3>
            <p class="card-text">Roofing systems with manufacturer warranties and code compliance.</p>
            <ul class="list-check">
              <li><i class="fas fa-check-circle"></i> Demolition and preparation</li>
              <li><i class="fas fa-check-circle"></i> Insulation and membranes</li>
              <li><i class="fas fa-check-circle"></i> Waterproofing and finishing</li>
            </ul>
            <span class="badge badge-epic">Roofing</span>
          </div>
        </div>
      </div>

      <!-- Balcony Restoration -->
      <div class="col-md-6 col-lg-4">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-umbrella"></i></div>
            <h3 class="card-title h4">Balcony Restoration</h3>
            <p class="card-text">Restoration and new construction of reinforced concrete balconies.</p>
            <ul class="list-check">
              <li><i class="fas fa-check-circle"></i> Demolition and structural repair</li>
              <li><i class="fas fa-check-circle"></i> Sika, Siplast, or Kemper coating system</li>
              <li><i class="fas fa-check-circle"></i> Waterproofing, UV protection, anti-slip finish</li>
            </ul>
            <span class="badge badge-epic">Balconies</span>
          </div>
        </div>
      </div>

      <!-- Parking Garage Restoration -->
      <div class="col-md-6 col-lg-4">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-parking"></i></div>
            <h3 class="card-title h4">Parking Garage Restoration</h3>
            <p class="card-text">Complete concrete restoration and high-traffic coating system.</p>
            <ul class="list-check">
              <li><i class="fas fa-check-circle"></i> Minimal operational disruption</li>
              <li><i class="fas fa-check-circle"></i> High-traffic resistant coating</li>
              <li><i class="fas fa-check-circle"></i> Compliance with engineering specifications</li>
            </ul>
            <span class="badge badge-epic">Garages</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Skilled Manpower & Scaffolding Section -->
    <div class="row mt-5 g-4">
      <div class="col-md-6">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-users"></i></div>
            <h3 class="h4">Skilled & Trained Manpower</h3>
            <p>Our workforce is trained and qualified to perform every stage of roofing, facade, and balcony restoration
              projects.</p>
            <p class="mb-0"><strong>Strict compliance with:</strong> Manufacturer guidelines, engineering
              specifications, on-site inspections, and local building codes (NYC DOB).</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card service-card h-100">
          <div class="card-body">
            <div class="service-icon"><i class="fas fa-tools"></i></div>
            <h3 class="h4">Scaffold System Capabilities</h3>
            <p>Experience with suspended and supported scaffold systems, designed according to:</p>
            <ul>
              <li>Existing structural conditions</li>
              <li>Access requirements and safety</li>
              <li>Cost-efficient methods for our clients</li>
            </ul>
            <p>All systems are engineered, installed, and inspected following NYC Department of Buildings safety
              standards.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Prioritizing Building Needs -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="card service-card">
          <div class="card-body text-center">
            <div class="service-icon"><i class="fas fa-chart-line"></i></div>
            <h3 class="h4">Prioritizing Building Needs</h3>
            <p>We tailor our roofing, balcony, and facade solutions to the unique needs of every building, considering
              structural conditions, climate, energy efficiency, maintenance requirements, budget, and lifecycle
              expectations.</p>
            <p class="mb-0 fw-bold">Our priority is to provide a system that enhances building performance, safety, and
              longevity.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>