export const copyNumber = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    e.target.innerText = 'Copied to clipboard!';

    setTimeout(() => {
        e.target.innerHTML = '<i class="fa fa-phone"></i> 55 19 13 08 41'
    }, 2000);
}