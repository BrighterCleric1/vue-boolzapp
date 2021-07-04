Vue.config.devtools = true;
new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        flagDelete: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        flagDelete: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        flagDelete: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        flagDelete: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        flagDelete: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        flagDelete: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        flagDelete: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        flagDelete: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        flagDelete: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        flagDelete: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        flagDelete: false
                    }
                ],
            },
        ],
        indexContact: null,
        textMessage: "",
        inputFilter: "",
    },
    methods: {
        move: function (index) {
            this.indexContact = index
        },
        getDateTime: function () {
            const currentTimeData = dayjs();
            return currentTimeData.format("DD/MM/YYYY HH:mm:ss");
        },
        addMessage: function (indexContact) {
            this.contacts[indexContact].messages.push({
                date: this.getDateTime(),
                status: "sent",
                text: this.textMessage,
                flagDelete: false
            });
            this.textMessage = "";
            setTimeout(() => {
                this.contacts[indexContact].messages.push({
                    date: this.getDateTime(),
                    status: "received",
                    text: "👺",
                    flagDelete: false
                });
            }, 1000);
        },
        filter: function () {
            this.contacts.forEach(cont => {
                if (!cont.name.toLowerCase().includes(this.inputFilter.toLowerCase())) {
                    cont.visible = false;
                } else {
                    cont.visible = true;
                }

            })
        },
        /*upCase: function (str) {
            if (!str == "") {
                return str[0].toUpperCase() + str.slice(1);
            } else {
                return ""
            }
        },*/
        deleteMessShow: function (message) {
            message.flagDelete = true;

        },
        deleteMessToggle: function (message) {
            message.flagDelete = false;
        },
        delMess: function (message, indexContact) {
            this.contacts[indexContact].messages.splice(message, 1)
        }
    }
})