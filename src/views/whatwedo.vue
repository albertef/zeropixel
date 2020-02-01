<template>
  <div class="col-12 p-0">
    <div class="row banner">
      <div class="col-12 col-md-6 p-5">
        <img src="@/assets/services.svg" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <h1>WHAT WE DO</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 align-self-center">
        <font-awesome-icon icon="align-left" />
      </div>
      <div class="col-12 col-md-8 p-5 text-left">
        <p>
          Through personalized communications and marketing, the utilization of
          the latest technology and continually upgrading our product and
          service range, we strive to attain maximum exposure for our clients
          and place them a step ahead of their competitors.
        </p>
        <h3>Services:</h3>
        <p>
          Multiple communications solutions are available under one roof. In
          this way, clients stay ahead of their competitors utilizing our
          exciting strategies and products.
        </p>
        <p>
          <ul class="service-list">
            <li v-for="service in services" v-bind:key="service.title" v-on:click="showDesc(service)">{{ service.title }}</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whatwedo",
  data() {
    return { title: "what-we-do",
    services: [
      {title: `Creative development`, desc: `Creative development of high impact advertising strategies.`},
      {title: `Planning and placing`, desc: `Planning and placing of advertisements in a broad range of Digital media.`},
      {title: `organizing and promoting`, desc: `Planning, organizing and promoting memorable events – from launches, exhibitions to conferences and corporate functions.`},
      {title: `Designing and printing`, desc: `Designing and printing the full range of corporate communication tools – from corporate identities, brochures, signage, stationery, newsletters and annual reports, including multimedia designs I.e. videos, power point presentations and website design and maintenance.`},
      {title: `Corporate clothing`, desc: `Corporate clothing and corporate gifts, including shirts, t-shirts, magnum caps, banners of all types, including pop-up and teardrop banners, mouse pads, diaries, calendars, pens and lots more.`},
      {title: `Promoters`, desc: `We make use of trained promoters to increase our client’s sales in the field.`},
      {title: `Corporate Photography`, desc: `Corporate Photography and Filming which includes everything from scratch: Script writing, Planning, Direction, Casting and Editing.`},
      {title: `IT Services`, desc: `ZRO PIXEL is a topnotch IT solutions provider that provides for an extensive range of professional services in the information technology arena. In today’s highly competitive business market, business needs to stay on track when it comes to technological advancements. Businesses need to focus on implementing the latest technological advancements and models as part of the organization development initiatives. If not, it would have an adverse effect on the development of a business. 
      ZRO PIXEL, an emerging service provider in the information technology space understands various technological assistance and support that a business requires and extends its professional support in highly advanced area. We extend our IT services, consulting services and business solutions to many organizations all over the world.`},
      {title: `Cloud Services`, desc: `Cloud Services of First Option helps businesses function smoothly and with great agility. We offer a standardized cloud solution that is simplified for business scalability. More and more businesses are moving towards cloud computing that facilitates easy storage and instant access to information from anywhere they want. It is also known to keep your data safe and secure from external threats. Our effective cloud service survives any crashes to network and provides for constant flow of information.`}, 
      {title: `IT Security`, desc: `First Option help businesses enforce an efficient, pro-active security system, keeping business priorities as the primary aspect. Businesses having a safe and secure infrastructure help stay ahead and gain a winning edge over its competitors in the market. We at, First Option, understand the importance of a safe and secure IT network for your business.
As business expand and develop, the necessity to exchange information with employees, customers and vendor increases and so does the threats to integrity and confidentiality. In order to tackle the situation effectively businesses should employ advanced safety and security features in case of advanced technology usage like analytics and cloud computing. First Option can provide the best and advanced safety and security support to your businesses enabling it to stay competitive in the market.`},
      {title: `IT Infrastructure`, desc: `Over the years, Information Technology infrastructure has seen phenomenal developments and has reached advanced stages. Almost, all spheres of work are now run by employing the latest techniques and devices that have now become vital to running a successful business. We at First Options, offer an extensive range of general infrastructure services to our clients, helping them to maximize their business potentials.`},
      {title: `Storage Virtualization`, desc: `Whether your business is small or large, the documents and data surrounding will keep increasing on daily basis. It is absolutely important that you have a proper and reliable storage system. An efficient storage system through software or hardware is crucial for keeping your data safe, secure, organized and easily accessible. First Option strives to provide the best and comprehensive virtualized storage solutions that maximize the storage space manifolds. The virtualized storage solutions suggested by our team would be in-built with high tech integration system using some of the best, advanced platforms. It facilitates automated, seamless usage of data without any hassles.`},
      {title: `Services`, desc: `First Option is a firm known to provide the most comprehensive line of services in the ever-evolving information technology arena. We are an experienced team of IT personnel with the zeal and enthusiasm to serve our clients with utmost dedication. Our line of services includes managed services, comprehensive maintenance contracts and engineer outsourcing services. All of these are based on client requirements and to their liking.`}
    ]
    };
  },
  methods: {
    showDesc: function(param){
      alert(param.desc);
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-family: "Oswald", sans-serif;
  color: #2b2b2b;
}
h3 {
  font-family: "Oswald", sans-serif;
  color: #F2F2F2;
}
p {
  color: #fff;
  // font-family: "Playfair Display", serif;
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 0.03rem;
  font-size: 1.2rem;
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    &.service-list{
      li {
        border: 1px solid #333;
        border-radius: 5px;
        width: 190px;
        height: 120px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        margin-bottom: 15px;
        overflow: hidden;
        padding: 15px;
        position: relative;
        cursor: pointer;
        text-align: center;
        transition: .3s ease;
        &:before {
          position: absolute;
          background: rgba(255,255,255,1);
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          content: "";
          transition: .3s ease;
          z-index: -1;
        }
        &:hover {
          &:before {
            left: 0;
            transition: .3s ease;
          }
          color: #000;
          transition: .3s ease;
          font-weight: 800;
        }
      }
    }
  }
}


.banner {
  background: #fff;
  img {
    -webkit-filter: grayscale(90%);
    filter: grayscale(90%);
  }
}
</style>
