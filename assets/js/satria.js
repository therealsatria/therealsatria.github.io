const namaDepan = "Satria";
const namaBelakang = "Nugraha";
let namaLengkap = `${namaDepan} ${namaBelakang}`;
let footerText = `© ${new Date().getFullYear()} ${namaLengkap}`;
const deskripsi = "An experienced IT professional with 8+ years of dual expertise as a .NET Back End Developer and Microsoft Infrastructure Technical Consultant, specializing in the financial industry. Possesses a solid track record of developing reliable and scalable .NET Core and ASP.NET-based applications, as well as designing, implementing, and maintaining Microsoft infrastructure solutions, including Active Directory for centralized identity and access management, Azure for cloud migration and serverless services, and Microsoft 365 for enhanced collaboration and productivity. Successfully reduced application downtime by 30% through the implementation of high availability solutions in Azure. Dedicated to delivering innovative technology solutions that drive efficiency, security, and business growth. Seeking a challenging role where I can leverage my expertise to make a significant impact.";
const deskripsi2 = "C# / .NET back-end developer with expertise in building scalable and reliable applications. Proficient in designing and implementing microservices architectures, RESTful APIs, and cloud-native solutions. Experienced in building serverless applications on Azure";

function updateElementById(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

document.title = `Portofolio ${namaLengkap}`;
updateElementById("footer", footerText + '&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.linkedin.com/in/satrianug/">LinkedIn</a>&nbsp;|&nbsp;&nbsp;<a href="mailto:therealsatria@gmail.com">therealsatria@gmail.com</a>');
updateElementById("deskripsi", deskripsi);
updateElementById("deskripsi2", deskripsi2);
updateElementById("namalengkap", namaLengkap);


