let namaDepan = "Satria";
let namaBelakang = "Nugraha";
let namaLengkap = `${namaDepan} ${namaBelakang}`;
let footerText = `© ${new Date().getFullYear()} ${namaLengkap}`;
let deskripsi = "An experienced IT professional with 8+ years of dual expertise as a .NET Back End Developer and Microsoft Infrastructure Technical Consultant, specializing in the financial industry. Possesses a solid track record of developing reliable and scalable .NET Core and ASP.NET-based applications, as well as designing, implementing, and maintaining Microsoft infrastructure solutions, including Active Directory for centralized identity and access management, Azure for cloud migration and serverless services, and Microsoft 365 for enhanced collaboration and productivity. Successfully reduced application downtime by 30% through the implementation of high availability solutions in Azure. Dedicated to delivering innovative technology solutions that drive efficiency, security, and business growth. Seeking a challenging role where I can leverage my expertise to make a significant impact.";

function updateElementById(id, value) {
  let element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}
updateElementById("name", namaLengkap);
updateElementById("footer", footerText + '&nbsp;&nbsp;|&nbsp;&nbsp;<i class="fab fa-linkedin"></i>&nbsp;<a href="https://www.linkedin.com/in/satrianug/" class="text-white">LinkedIn</a>&nbsp;|&nbsp;&nbsp;<i class="fas fa-envelope"></i>&nbsp;<a href="mailto:satrianug@live.com">satrianug@live.com</a>');

document.title = `Portofolio ${namaLengkap}`;

updateElementById("deskripsi", deskripsi);