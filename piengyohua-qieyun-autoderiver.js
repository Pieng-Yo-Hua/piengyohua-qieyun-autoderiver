// 推導平遙話

if (!音韻地位) return [['$legacy', true], ['文讀', true],];

const is = (x) => 音韻地位.屬於(x);

const 文讀 = 選項['文讀'];

function 聲母規則(文讀) {
    if (is('幫母')) {
        if (is('東韻 三等 或 鍾微虞廢文元陽尤凡韻')) return 'h';
        return 'b';
    }
    if (is('滂母')) {
        if (is('東韻 三等 或 鍾微虞廢文元陽尤凡韻')) return 'h';
        return 'p';
    }
    if (is('並母')) {
        if (is('東韻 三等 或 鍾微虞廢文元陽尤凡韻')) return 'h';
        if (is('平聲') && 文讀) return 'p';
        return 'b';
    }
    if (is('明母')) {
        if (is('微虞文元陽凡韻')) return '';
        return 'm';
    }

    if (is('端母')) return 'd';
    if (is('透母')) return 't';
    if (is('定母')) return 文讀 && is('平聲') ? 't' : 'd';
    if (is('泥母')) return 'n';
    if (is('來母')) return 'l';

    if (is('知母 二等')) return is('梗攝') && (!文讀) ? 'zh' : 'z';
    if (is('知母 三等')) return is('蟹攝') ? 'z' : 'zh';
    if (is('徹母 二等')) return is('梗攝') && (!文讀) ? 'ch' : 'c';
    if (is('徹母 三等')) return is('蟹攝') ? 'c' : 'ch';
    if (is('澄母 二等')) return is('梗攝') && (!文讀) ? 'zh' : 'z';
    if (is('澄母 三等 平聲') && 文讀) return is('蟹攝') ? 'c' : 'ch';
    else if (is('澄母 三等')) return is('蟹攝') ? 'z' : 'zh';
    if (is('孃母 二等')) return 'nz';
    if (is('孃母 三等')) {
        if (is('合口')) return 'n';
        if (is('止攝')) return 'nz';
        else if (is('咸山攝') || is('魚尤韻')) return 'nr';
        else return 'n';
    }

    if (is('精母')) return 'z';
    if (is('清母')) return 'c';
    if (is('從母')) return is('平聲') && 文讀 ? 'c' : 'z';
    if (is('心母')) return 's';
    if (is('邪母')) return 's';

    //莊組文讀
    if (is('莊母') && 文讀) return is('臻攝') ? 'zh' : 'z';
    if (is('初母') && 文讀) return is('臻攝') ? 'ch' : 'c';
    if (is('崇母 平聲') && 文讀) return is('臻攝') ? 'ch' : 'c';
    if (is('崇母 上去入聲') && 文讀) return is('臻攝') ? 'zh' : 'z';
    if (is('生母') && 文讀) return is('臻攝') ? 'sh' : 's';
    if (is('俟母') && 文讀) return is('臻攝') ? 'sh' : 's';
    //莊組白讀
    if (is('莊母') && !文讀) return is('臻梗攝') ? 'zh' : 'z';
    if (is('初母') && !文讀) return is('臻梗攝') ? 'ch' : 'c';
    if (is('崇母') && !文讀) return is('臻梗攝') ? 'sh' : 's';
    if (is('生母') && !文讀) return is('臻梗攝') ? 'sh' : 's';
    if (is('俟母') && !文讀) return is('臻梗攝') ? 'sh' : 's';

    //章組文讀
    if (is('章母')) return is('止遇攝') ? 'z' : 'zh';
    if (is('昌母')) return is('止遇攝') ? 'c' : 'ch';
    if (is('常母 止遇攝')){
        return (is('平聲') && 文讀) ? 'c' : 's';
    } else if (is('常母')) {
        return (is('平聲') && 文讀) ? 'ch' : 'sh';
    }
    if (is('書船母')) return is('止遇攝') ? 's' : 'sh';

    if (is('日母')) return is('止遇攝') ? 'zs' : 'r'; //日母待考

    if (is('見母')) return 'g';
    if (is('溪母')) return 'k';
    if (is('羣母')) return (!文讀) ? 'g' : is('平聲') ? 'k' : 'g';
    if (is('疑母')) {
        if (is('合口') || is('模韻') || is('通江攝')) return '';
        else if (is('魚虞韻') && 文讀) return '';
        else return 'ng';
    }

    if (is('曉匣母')) return 'h';
    if (is('影母')) {
        if (is('麻韻 二等')) return '';
        else if (is('梗攝 開口 二等')) return ''
        else return is('一二等 開口') ? 'ng' : '';
    }
    if (is('云以母')) return ''; 

    throw new Error('無聲母規則');
}

function 韻母規則(文讀) {
    // 通攝
    if (is('東韻 舒聲 一等')) return is('幫組 或 泥孃母') ? 'eng' : 'ueng';
    if (is('東韻 舒聲 三等')) return is('牙喉音') ? 'yueng' : is('明母') ? 'eng' : 'ueng';
    if (is('東韻 入聲 一等')) return is('精組') ? 'yuaq' : is('幫組') ? 'aq' : 'uaq';
    if (is('東韻 入聲 三等')) return is('精組 或 牙喉音') ? 'yuaq' : 'uaq';
    if (is('鍾韻 舒聲')) return is('牙喉音') ? 'yueng' : is('孃母') ? 'eng' : 'ueng';
    if (is('鍾韻 入聲')) return is('精組 或 牙喉音') ? 'yuaq' : 'uaq';
    if (is('冬韻 舒聲')) return is('泥孃母') ? 'eng' : 'ueng';
    if (is('冬韻 入聲')) return is('幫組') ? 'aq' : is('精組') ? 'yuaq' : 'uaq';


    // 江攝
    if (is('江韻 入聲 幫組')) return 'aq';
    if (is('江韻 入聲') && 文讀) return is('見溪疑曉匣母') ? 'yuaq' : 'uaq';
    if (is('江韻 入聲') && !文讀) return is('牙喉音') ? 'yuaq' : 'aq'; //白讀未詳細整理
    if (is('江韻 舒聲 知莊組')) return 文讀 ? 'uon' : 'uo';
    if (is('江韻 舒聲 幫組')) return 文讀 ? 'ang' : 'uo';
    if (is('江韻 舒聲 牙喉音')) return 文讀 ? 'iang' : 'yuo';
    if (is('江韻 舒聲')) return 文讀 ? 'ueng' : 'uo';

    // 止攝
    if (is('支脂韻 幫組')) return 'i';
    if (is('之脂支韻 精知莊章組 開口')) return 'r';
    if (is('之脂支韻 開口')) return is('牙喉音') ? 'i' : 'er';
    if (is('脂支韻 合口 見溪羣疑影曉匣云母 重紐A類')) return 'i';
    if (is('脂支韻 合口 見溪羣疑影曉匣云母 重紐B類')) return 'uei';
    if (is('脂支韻 合口')) return is('莊組') ? 'uae' : is('孃母') ? 'ei' : 'uei';
    if (is('微韻 幫組')) return 文讀 ? 'uei' : 'i';
    if (is('微韻 開口')) return 'i';
    if (is('微韻 合口')) return 文讀 ? 'uei' : 'yu';



    // 遇攝
    if (is('魚虞韻') && is('知莊章組 或 日母')) return 'w';
    if (is('魚虞韻') && is('牙喉音 或 精組')) return 'yu';
    if (is('魚虞韻 來母')) return 'uei'; //猜測來自裂化
    if (is('虞韻 幫組')) return 'u';
    if (is('模韻')) return is('精組 或 泥來母') ? 'ou' : 'u';

    // 蟹攝
    if (is('齊祭廢韻 合口')) return 'uei'; //齊韻存疑，待考
    if (is('齊廢韻')) return (is('精組')  && (!文讀)) ? 'ei' : 'i';
    if (is('祭韻')) return (is('精組')  && (!文讀)) ? 'ei' : is('知莊章組') ? 'r' : 'i';
    if (is('泰韻 合口')) return is('精組') ? 'uei' : 'uae';
    if (is('泰韻')) return 'ae';
    if (is('灰韻')) return is('幫組 或 泥母') ? 'ae' : 'uae';
    if (is('佳韻 合口')) return 'ua';
    if (is('皆韻 合口')) return 'uae';
    if (is('佳皆韻 見組')) return 'ie';
    if (is('佳皆韻 曉匣母')) return 文讀 ? 'ie' : 'ae';
    if (is('佳皆韻')) return 'ae';
    if (is('夬韻 合口')) return is('曉云匣母') ? 'ua' : 'uae';
    if (is('夬韻')) return 'ae';
    if (is('咍韻')) return 'ae';

    // 臻攝
    if (is('臻攝 舒聲')) {
        if (is('眞韻 合口')) return is('知莊章組 或 來日母') ? 'ueng' : 'yueng';
        if (is('眞臻欣韻')) return is('莊章組 或 日母') ? 'eng' : is('知徹澄母') ? 'aq' : 'ieng';
        if (is('文韻')) return is('幫組') ? 'ueng' : 'yueng';
        if (is('元韻 開口')) return 'ie';
        if (is('元韻')) return is('幫組') ? 'uon' : 'yue';
        if (is('痕韻')) return 'eng';
        if (is('魂韻')) return is('幫組 或 泥母') ? 'eng' : 'ueng';
    }

    if (is('臻攝 入聲')) {
        if (is('眞韻 合口')) return is('知莊章組 或 來日母') ? 'uaq' : 'yuaq';
        if (is('眞臻欣韻')) return is('莊章組 或 日母') ? 'aq' : is('知徹澄母') ? 'aq' : 'iaq';
        if (is('文韻')) return is('幫組') ? 'uaq' : 'yuaq';
        if (is('元韻 開口')) return 'iaq';
        if (is('元韻')) return is('幫組') ? 'uaq' : 'yuaq';
        if (is('痕韻')) return 'aq';
        if (is('魂韻')) return is('幫組 或 泥母') ? 'aq' : 'uaq';
    }


    // 山攝
    if (is('山攝 舒聲')) {
        if (is('寒韻')) return is('開口 或 幫組') ? 'ang' : 'uon';
        if (is('刪山韻 合口')) return 'uon';
        if (is('刪山韻')) return is('牙喉音') ? 'iang' : 'ang';
        if (is('仙先韻 合口')) return is('知莊章組 或 日母') ? 'uon' : 'yue';
        if (is('仙先韻')) return is('知莊章組 或 日母') ? 'ang' : 'ie';
    }

    if (is('山攝 入聲')) {
        if (is('寒韻')) return is('開口 或 幫組') ? 'aq' : 'uaq';
        if (is('刪山韻 合口')) return 'uaq';
        if (is('刪山韻')) return 'aq';
        if (is('仙先韻 合口')) return is('知莊章組 或 日母') ? 'uaq' : 'yuaq';
        if (is('仙先韻')) return is('知莊章組 或 日母') ? 'aq' : 'iaq';

    }

    // 效攝
    if (is('蕭宵韻')) return is('知莊章組 或 日母') ? 'o' : 'io';
    if (is('肴韻')) return is('牙喉音') ? 'io' : 'o';
    if (is('豪韻')) return is('幫組') && !文讀 ? 'u' : 'o';

    // 果攝
    if (is('果攝') && !文讀) {
        if (is('歌韻 一等 合口')) return is('精組') ? 'yue' : 'uei';
        if (is('歌韻 一等')) return is('精見組 或 影母') ? 'ie' : 'ei'; //影母待考\ 聲母顎化待處理
        if (is('歌韻')) return is('開口') ? 'ia' : 'yue';
    }
    if (is('果攝') && 文讀) {
        if (is('歌韻 一等 合口')) return 'uo';
        if (is('歌韻 一等')) return is('幫組 或 牙喉音') ? 'o' : 'uo';
        if (is('歌韻 三等')) return is('開口') ? 'ia' : 'yue';
    }


    // 假攝
    if (is('麻韻 二等 合口')) return 'ua'; //傻字待考
    if (is('麻韻 二等 見溪羣疑母')) return 'ia';
    if (is('麻韻 二等 影曉匣母')) return 文讀 ? 'ia' : 'a';
    if (is('麻韻 二等')) return 'a';
    if (is('麻韻 三等')) return is('章組 或 日母') ? 'e' : 'ie';

    // 宕攝
    if (is('宕攝 舒聲 合口')) return 文讀 ? 'uon' : 'uo';
    if (is('宕攝 舒聲')) {
        if (is('唐韻')) return 文讀 ? 'ang' : is('精組') ? 'yuo' : 'uo';
        if (is('陽韻') && 文讀) return is('精組 或 牙喉音 或 孃來母') ? 'iang' : is('幫莊組') ? 'uon' : 'ang';
        if (is('陽韻') && !文讀) return is('精組 或 牙喉音 或 孃母') ? 'yuo' : 'uo';
    }

    if (is('宕攝 入聲')) {
        if (is('唐陽韻 合口')) return 'uaq'; //唐韻白讀-aq（如「郭」字）罕見，待考
        if (is('唐韻')) return 'aq';
        if (is('陽韻 幫莊組')) return 'uaq';
        if (is('陽韻 知章組 或 陽韻 日母')) return 文讀 ? 'uaq' : 'aq';
        if (is('陽韻')) return 文讀 ? 'yuaq' : 'iaq';
    }

    // 梗攝
    if (is('梗攝 舒聲') && 文讀) {
        if (is('庚韻 二等')) {
            if (is('合口')) return 'uang';
            else return is('幫組') ? 'ang' : is('孃疑影曉匣母') ? 'ieng' : 'eng';
        }
        if (is('耕韻 二等')) {
            if (is('合口')) return 'ueng';
            else return is('孃疑影曉匣母') ? 'ieng' : 'eng';
        }
        if (is('庚韻 三等')) {
            if (is('合口')) return 'yueng';
            else return is('幫組 或 牙喉音') ? 'ieng' : 'eng';
        }
        if (is('清韻')) {
            if (is('合口')) return 'yueng';
            else return is('知莊章組') ? 'eng' : 'ieng';
        }
        if (is('青韻')) {
            if (is('合口')) return 'yueng';
            else return 'ieng';
        }
    }
    if (is('梗攝 入聲') && 文讀) {
        if (is('庚韻 二等')) {
            if (is('合口')) return 'uaq';
            else return is('幫組') ? 'iaq' : 'aq';
        }
        if (is('耕韻 二等')) {
            if (is('合口')) return 'ueng';
            else return is('幫組') ? 'iaq' : 'aq';
        }
        if (is('庚韻 三等')) {
            if (is('合口')) return 'uaq';
            else return is('幫組 或 牙喉音') ? 'iaq' : 'aq';
        }
        if (is('清韻')) {
            if (is('合口')) return 'iaq';
            else return is('知莊章組') ? 'aq' : 'iaq';
        }
        if (is('青韻')) {
            if (is('合口')) return 'yuaq';
            else return 'iaq';
        }
    }

    if (is('梗攝 舒聲') && (!文讀)) {
        if (is('庚韻 二等 幫組')) return 'ia';
        if (is('庚韻 二等 開口 知莊組')) return 'a';
        if (is('庚韻 二等 開口 牙喉音')) return 'ia';
        if (is('庚韻 二等 合口')) return 'yue';
        if (is('庚韻 二等')) return 'ia';
        if (is('庚韻 三等 合口')) return 'yu';
        if (is('庚韻 三等 開口 莊組')) return 'e';
        if (is('庚韻 三等')) return 'i';
        if (is('耕韻 合口')) return 'yue';
        if (is('耕韻')) return is('幫見組') ? 'ie' : 'a';
        if (is('青清韻 合口')) return 'yu';
        if (is('青韻')) return is('精組') ? 'ei' : 'i';
        if (is('清韻 開口 精組')) return 'ei';
        if (is('清韻')) return 'i';

    }
    // 曾攝
    if (is('曾攝 舒聲') && 文讀) {
        if (is('蒸韻')) return is('知莊章組 或 日母') ? 'eng' : 'ieng';
        if (is('登韻')) return is('合口') ? 'ueng' : 'eng';
    }
    if (is('曾攝 舒聲') && !文讀) {
        if (is('蒸韻')) return is('知莊章組') ? 'r' : is('日母') ? 'er' : 'i';
        if (is('登韻')) return is('合口') ? 'ueng' : 'eng';
    }
    if (is('曾攝 入聲')) {
        if (is('蒸韻 合口')) return 'yuaq';
        if (is('蒸韻')) return is('莊章組 或 日母') ? 'aq' : is('知徹澄母') ? 'aq' : 'iaq'; //影母字待考
        if (is('登韻')) return is('合口') ? 'uaq' : is('幫組') && 文讀 ? 'iaq' : 'aq';
    }

    // 流攝
    if (is('尤韻 幫組')) return 'u';
    if (is('尤韻')) return is('知莊章組 或 日母') ? 'ou' : 'iou';
    if (is('侯韻')) return is('幫組') ? 'u' : 'ou';
    if (is('幽韻')) return is('幫組') ? 'io' : 'iou';

    // 深攝
    if (is('侵韻 舒聲')) return is('知莊章組 或 日母') ? 'eng' : 'ieng';
    if (is('侵韻 入聲')) return is('知莊章組 或 日母') ? 'aq' : 'iaq';

    // 咸攝
    if (is('覃談韻 舒聲')) return 'ang';
    if (is('覃談韻 入聲')) return 'aq';
    if (is('鹽添嚴韻 舒聲')) return is('知莊章組 或 日母') ? 'ang' : 'ie';
    if (is('鹽添嚴韻 入聲')) return is('知莊章組 或 日母') ? 'aq' : 'iaq';
    if (is('凡韻 幫組 舒聲')) return 'uon';
    if (is('凡韻 幫組 入聲')) return 'uaq';
    if (is('咸銜韻 舒聲')) return is('見溪羣曉匣母') ? 'iang' : 'ang';
    if (is('咸銜韻 入聲')) return is('見溪羣曉匣母') ? 'iaq' : 'aq';

    throw new Error('無韻母規則');
}

function 聲調規則() {
    if (is('全清 或 次清')) {
        if (is('平聲')) return '1'; // 陰平
        if (is('上聲')) return '3'; // 上
        if (is('去聲')) return '4'; // 去
        if (is('入聲')) return '5'; // 陰入
    } else {
        if (is('平聲')) return '2'; // 陽平
        if (is('全濁 上聲')) return '4'; // 全濁上變去
        if (is('上聲')) return '3'; // 上
        if (is('去聲')) return '4'; // 去
        if (is('入聲')) return '6'; // 陽入
    }
    throw new Error('無聲調規則');
}

let 聲母 = 聲母規則(文讀);
let 韻母 = 韻母規則(文讀);
let 聲調 = 聲調規則();


if (!聲母) {
    if (韻母[0] === 'i') 聲母 = 'y'; //拼寫
    if (韻母[0] === 'u') {
        聲母 = 'w'; //拼寫
    }
    if (['a', 'e', 'o'].includes(韻母[0])) 聲母 = 'ng'; //影併入疑
    if (聲母 && 韻母[1] && 韻母[1] !== 'n') 韻母 = 韻母.slice(1);
}
if (韻母 === 'er') {
    if (['r', 'zs'].includes(聲母)) 聲母 = '';
    else 韻母 = 'i';
}

if ((['w']).includes(聲母) && 韻母 === 'i') {
    聲母 = 'y';
} //微韻白讀

if ((['zh', 'ch', 'sh', 'r', 'nr'].includes(聲母) && ['u', 'w'].includes(韻母[0]))) 聲母 = {
    zh: 'z', ch: 'c', sh: 's', r: 'zs', nr: 'nz',
}[聲母] || 聲母; //翹舌與合口衝突

if (['i', 'y'].includes(韻母[0]) && (!(is('歌韻 一等 見組') || is('歌韻 一等 影母')))) 聲母 = {
    g: 'j', k: 'q', h: 'x', ng: 'n',
    z: 'j', c: 'q', s: 'x',
}[聲母] || 聲母; //顎化及尖團合流


return 聲母 + 韻母 + 聲調;
