function isNumber(broj){
    return Number(broj) === broj;
}

export function ConditionalRendering({props}){
    if (!isNumber(props)) return;

    var isVeci = false;
    if (props > 10) {
        isVeci = true;
    }
    return (
        <div>
            {isVeci && <p>Ako je veci od 10 - {props}</p>}
            {!isVeci && <p>Ako je manji od 10 - {props}</p>}

        </div>
    );
}
