function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Jinn',
                'Syaitan',
                'Malaikat',
                'Peri',
                'Naga',
                'Setan',
                'Hantu',
                'Jin',
                'Iblis',
                'Kuntilanak',
                'Pocong',
                'Rawa Rontek',
                'Setang Bengkok',
                'tikus terbang',
                'harimau',
                'Cicak Kutung',
                'Oyen'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - Macan Gay`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});