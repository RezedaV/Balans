const dataTable = [
        {
            "accountId": 18520,
            "accountName": "Касса",
            "periodBeginBalance": 27380,
            "periodEndBalance": 33586.55,
            "organizationId": 6826,
            "organizationName": "ООО Автосервис",
            "values": [
                {
                    "date": "2022-01",
                    "debitAmount": 5600,
                    "creditAmount": -1453,
                },
                {
                    "date": "2022-02",
                    "debitAmount": 3750,
                    "creditAmount": -890.45,
                },
                {
                    "date": "2022-03",
                    "debitAmount": 0,
                    "creditAmount": -800,
                },
            ],
        },
        {
            "accountId": 18520,
            "accountName": "Касса #2",
            "periodBeginBalance": 6890,
            "periodEndBalance": 37260,
            "organizationId": 3835,
            "organizationName": "ООО Магазин",
            "values": [
                {
                    "date": "2022-01",
                    "debitAmount": 15640,
                    "creditAmount": 0,
                },
                {
                    "date": "2022-02",
                    "debitAmount": 6000,
                    "creditAmount": -3400,
                },
                {
                    "date": "2022-03",
                    "debitAmount": 18200,
                    "creditAmount": -6070,
                },
            ],
        }
    ]



let totalBeginBalance = 0;
let totalEndBalance = 0;
//выводит название компаний, начальный баланс, конечный баланс и общие суммы по балансам
function buildTable(data){
    let organizationName = document.querySelector('.organizationName');
    let periodBeginBalance = document.querySelector('.BeginBalance');
    let periodEndBalance = document.querySelector('.EndBalance');
    let totalBegin = document.querySelector('.totalBeginBalance');
    let totalEnd = document.querySelector('.totalEndBalance');


    for ( let i = 0; i < data.length ; i++){
        let name = data[i].organizationName;
        let BeginBalance = data[i].periodBeginBalance;
        let EndBalance = data[i].periodEndBalance;

        if(BeginBalance >= 0 ){
            periodBeginBalance.insertAdjacentHTML('afterEnd', `<div class="green">${BeginBalance}</div>`);
        }
        if(EndBalance >= 0){
            periodEndBalance.insertAdjacentHTML('afterEnd', `<div class="green">${EndBalance}</div>`);
        }
        else {
            periodBeginBalance.insertAdjacentHTML('afterEnd', `<div class="red">${BeginBalance}</div>`);
            periodEndBalance.insertAdjacentHTML('afterEnd', `<div class="red">${EndBalance}</div>`);
        }
        organizationName.insertAdjacentHTML('afterEnd', `<div class="table__organizationName">${name}</div>`);

    }

    for( let y = 0; y < data.length; y++){
        totalEndBalance += data[y].periodEndBalance;
        totalBeginBalance += data[y].periodBeginBalance;
    }
    if(totalBeginBalance > 0){
        totalBegin.insertAdjacentHTML('afterbegin',`<div class="table__totalBeginBalance green">${totalBeginBalance}</div>`);
    }if(totalEndBalance > 0){
        totalEnd.insertAdjacentHTML('afterbegin',`<div class="table__totalEndBalance green">${totalEndBalance}</div>`);
    }
    else {
        totalBeginBalance.insertAdjacentHTML('afterbegin',`<div class="table__totalBeginBalance red">${totalBeginBalance}</div>`);
        totalEnd.insertAdjacentHTML('afterbegin',`<div class="table__totalEndBalance red">${totalEndBalance}</div>`);
    }

}
buildTable(dataTable);


buildPeriod(dataTable);
buildPeriod2(dataTable);
// для 1 элемента из массива "values", вывод сумм по месяцам и названия месяцев
function buildPeriod(data2){
    let date = document.querySelector('.table__date');
    let debitAmount = document.querySelector('.table__debit_credit');
    let creditAmount = document.querySelector('.table__debit_credit');

    for ( let i = 0; i <= data2.length ; i++){
        let dateMonth = data2[1].values[i].date;
        let debit = data2[1].values[i].debitAmount;
        let credit = data2[1].values[i].creditAmount;

        date.insertAdjacentHTML('afterbegin', `<div class="table__dateMonth">${dateMonth}</div>`);
        debitAmount.insertAdjacentHTML('afterbegin',`<div class="table__debitSum green">${debit}</div>`);
        creditAmount.insertAdjacentHTML('afterbegin',`<div class="table__creditSum red">${credit}</div>`);
    }
}


// для 0 элемента из массива "values", вывод сумм по месяцам
function buildPeriod2(data3){
    let debitAmount = document.querySelector('.table__debit_credit2');
    let creditAmount = document.querySelector('.table__debit_credit2');
    for ( let i = 0; i <= data3.length ; i++){
        let debit = data3[0].values[i].debitAmount;
        let credit = data3[0].values[i].creditAmount;
        debitAmount.insertAdjacentHTML('afterbegin',`<div class="table__debitSum green">${debit}</div>`);
        creditAmount.insertAdjacentHTML('afterbegin',`<div class="table__creditSum red">${credit}</div>`);
    }
}


let saldo1 = 0;
let saldo2 = 0;
let saldo3 = 0;

// вывод суммы САЛЬДО  по месяцам
function saldoMonth(data){
    let saldoMonth1 = document.querySelector('.table__saldo_month3');
    let saldoMonth2 = document.querySelector('.table__saldo_month2');
    let saldoMonth3 = document.querySelector('.table__saldo_month1');

    for (let i = 0; i < data.length; i++){
        saldo1 += data[i].values[0].debitAmount + data[i].values[0].creditAmount;
    }
    for (let i = 0; i < data.length; i++){
        saldo2 += data[i].values[1].debitAmount + data[i].values[1].creditAmount;
    }
    for (let i = 0; i < data.length; i++){
        saldo3 += data[i].values[2].debitAmount + data[i].values[2].creditAmount;
    }
    if(saldo1 > 0){
        saldoMonth1.insertAdjacentHTML('afterbegin',`<div class="table__saldo_month_sum green">${saldo1}</div>`);
    }if(saldo2 > 0){
        saldoMonth2.insertAdjacentHTML('afterbegin',`<div class="table__saldo_month_sum green">${saldo2}</div>`);
    }if(saldo3 > 0){
        saldoMonth3.insertAdjacentHTML('afterbegin',`<div class="table__saldo_month_sum green">${saldo3}</div>`);
    }
    else {
        saldoMonth1.insertAdjacentHTML('afterbegin',`<div class="table__saldo_month_sum red">${saldo1}</div>`);
        saldoMonth2.insertAdjacentHTML('afterbegin',`<div class="table__saldo_month_sum red">${saldo2}</div>`);
        saldoMonth3.insertAdjacentHTML('afterbegin',`<div class="table__saldo_month_sum red">${saldo3}</div>`);
    }
}
saldoMonth(dataTable);

// вывод суммы баланса по МЕСЯЦАМ (самая нижняя строка)
function balansMonth() {
    let month1 = document.querySelector('.table__balans_month1');
    let month2 = document.querySelector('.table__balans_month2');
    let month3 = document.querySelector('.table__balans_month3');
    let balansMonth3 = totalBeginBalance - saldo3;
    let balansMonth2 = totalBeginBalance - saldo2;
    let balansMonth1 = totalBeginBalance - saldo1;

    if(balansMonth3 > 0){
        month1.insertAdjacentHTML('afterbegin',`<div class="table__balans_month_sum green">${balansMonth3}</div>`);
    }if(balansMonth2 > 0){
        month2.insertAdjacentHTML('afterbegin',`<div class="table__balans_month_sum green">${balansMonth2}</div>`);
    }if(balansMonth1 > 0){
        month3.insertAdjacentHTML('afterbegin',`<div class="table__balans_month_sum green">${balansMonth1}</div>`);
    } else {
        month1.insertAdjacentHTML('afterbegin',`<div class="table__balans_month_sum red">${balansMonth3}</div>`);
        month2.insertAdjacentHTML('afterbegin',`<div class="table__balans_month_sum red">${balansMonth2}</div>`);
        month3.insertAdjacentHTML('afterbegin',`<div class="table__balans_month_sum red">${balansMonth1}</div>`);
    }
}

balansMonth();


let total2 = 0;
let total = 0;
// для 0 элемента из массива "values", сумма сальдо
function sumSaldo(data) {
    let saldo = document.querySelector('.table__col_saldo__company');
    for( let i = 0; i <= data.length; i++){
        total += (data[1].values[i].debitAmount + data[1].values[i].creditAmount);
    }

    if(total > 0){
        saldo.insertAdjacentHTML('afterbegin',`<div class="table__company_saldo__sum green">${total}</div>`);
    } else {
        saldo.insertAdjacentHTML('afterbegin',`<div class="table__company_saldo__sum red">${total}</div>`);
    }
}

// для 1 элемента из массива "values", , сумма сальдо
function sumSaldo2(data4) {
    let saldo2 = document.querySelector('.table__col_saldo__company2');

    for( let i = 0; i <= data4.length; i++){
        total2 += (data4[0].values[i].debitAmount + data4[0].values[i].creditAmount);
    }
    if(total2 > 0){
        saldo2.insertAdjacentHTML('afterbegin',`<div class="table__company_saldo__sum green">${total2}</div>`);
    } else {
        saldo2.insertAdjacentHTML('afterbegin',`<div class="table__company_saldo__sum red">${total2}</div>`);
    }
}

sumSaldo(dataTable);
sumSaldo2(dataTable);

let Saldo = document.querySelector('.table__sum_saldo_all');
let SumSaldo = total + total2;


if(SumSaldo > 0){
    Saldo.insertAdjacentHTML('afterbegin',`<div class="table__sum_saldo green">${SumSaldo}</div>`);
} else {
    Saldo.insertAdjacentHTML('afterbegin',`<div class="table__sum_saldo red">${SumSaldo}</div>`);
}

