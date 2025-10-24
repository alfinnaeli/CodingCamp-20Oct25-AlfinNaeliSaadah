        function formatDate(date) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        function getCurrentFormattedDate() {
            return new Date().toString();
        }

        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.name.value.trim();
            const tglValue = this.tgl.value;
            const gender = this.gender.value;
            const pesan = this.pesan.value.trim();

            let formattedTgl = "";
            if (tglValue) {
                const dateObj = new Date(tglValue);
                formattedTgl = formatDate(dateObj);
            }

            const output = 
                `Current time: ${getCurrentFormattedDate()}

                Name : ${name}
                Tanggal Lahir : ${formattedTgl}
                Jenis Kelamin : ${gender}
                Pesan : ${pesan ? pesan : "-"}`
            
            const messageOutput = document.getElementById('messageOutput');
            messageOutput.textContent = output;
        });
