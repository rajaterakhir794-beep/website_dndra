document.getElementById("myForm").addEventListener("submit", function(event) {

event.preventDefault();

let nama = document.getElementById("nama").value;
let alamat = document.getElementById("alamat").value;
let tempat = document.getElementById("tempat").value;
let tanggal = document.getElementById("tanggal").value;
let hp = document.getElementById("hp").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let jk = document.querySelector('input[name="jk"]:checked');
jk = jk ? jk.value : "Belum dipilih";

let agama = document.getElementById("agama").value;

let hobi = [];
document.querySelectorAll('input[name="hobi"]:checked').forEach(function(item) {
    hobi.push(item.value);
});

let hasil = `
<div style="
    background: rgba(255,255,255,0.1);
    padding: 20px;
    border-radius: 15px;
    margin-top: 20px;
    text-align: left;
    border: 1px solid white;
">
    <h3>📋 Biodata Terkirim</h3>

    <p><b>Nama:</b> ${nama}</p>
    <p><b>Alamat:</b> ${alamat}</p>
    <p><b>Tempat Lahir:</b> ${tempat}</p>
    <p><b>Tanggal Lahir:</b> ${tanggal}</p>
    <p><b>Nomor HP:</b> ${hp}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Password:</b> ${password}</p>
    <p><b>Jenis Kelamin:</b> ${jk}</p>
    <p><b>Agama:</b> ${agama}</p>
    <p><b>Hobi:</b> ${hobi.length > 0 ? hobi.join(", ") : "Tidak ada"}</p>
</div>
`;

document.getElementById("hasil").innerHTML += hasil;

alert("Biodata berhasil dikirim!");

document.getElementById("myForm").reset();

});
