const namaDepan = "Satria";
const namaBelakang = "Nugraha";
let namaLengkap = `${namaDepan} ${namaBelakang}`;
let footerText = `© ${new Date().getFullYear()} ${namaLengkap}`;
const deskripsi = `I am a seasoned Technical Consultant with a strong track record in leveraging Microsoft products to deliver robust solutions. My expertise spans across Active Directory, Microsoft 365 Entra, Microsoft 365 Security, and Microsoft Intune. With a proven ability to understand and solve complex technical challenges, I have helped organizations streamline their IT infrastructure and enhance their security posture.
<br><br>
In addition to my consulting experience, I have hands-on experience as a back-end .NET Developer. For a year, I contributed to enterprise projects, where I developed scalable and efficient backend solutions. My dual expertise in consulting and development allows me to bridge the gap between technical implementation and strategic planning, ensuring that projects are not only well-executed but also aligned with business goals.
<br><br>
I am passionate about staying current with technological advancements and continuously seek opportunities to expand my knowledge and skills. I thrive in collaborative environments and am committed to driving innovation and excellence in every project I undertake.`;

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





