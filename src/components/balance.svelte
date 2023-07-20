<div class="balance-container">
    <div class="input-container">
        <input type="text" id="input" placeholder="$2000">
        <input type="date" id="first-date">
        <input type="date" id="second-date">
    </div>
    <p>Error Code Here</p>
</div>

<style>
    .balance-container {
        align-self: center;
        padding-bottom: 3rem;
    }

    .input-container {
        display: grid;
        grid-template-columns: 15rem 15rem;
        grid-template-areas: 
        "input first"
        "input second";
        column-gap: .5rem;
        margin: auto;
        width: fit-content;
    }

    #input {
        grid-area: input;
        height: 100%;
        font-size: 2rem;
        font-family: monospace;
        text-align: center;
    }

    #first-date {
        grid-area: first;
    }

    #second-date {
        grid-area: second;
    }

    #first-date, #second-date {
        height: 100%;
        margin: 0;
    }

    p {
        text-align: center;
        color: red;
    }
</style>