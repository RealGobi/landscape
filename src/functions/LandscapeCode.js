

export const landscape = (query) => {
  let output= [];
  query.forEach(el => {

    switch (el.key[0]) {
      case '101':
        output.push({title: 'Skåne', year: el.key[1], pop: el.values[0]});
      break;
      case '102':
        output.push({title: 'Blekinge', year: el.key[1], pop: el.values[0]});
      break;
      case '103':
        output.push({title: 'Öland', year: el.key[1], pop: el.values[0]});
      break;
      case '104':
        output.push({title: 'Halland', year: el.key[1], pop: el.values[0]});
      break;
      case '105':
        output.push({title: 'Småland', year: el.key[1], pop: el.values[0]});
      break;
      case '106':
        output.push({title: 'Gotland', year: el.key[1], pop: el.values[0]});
      break;
      case '107':
        output.push({title: 'Västergötland', year: el.key[1], pop: el.values[0]});
      break;
      case '108':
        output.push({title: 'Östragötaland', year: el.key[1], pop: el.values[0]});
      break;
      case '109':
        output.push({title: 'Bohuslän', year: el.key[1], pop: el.values[0]});
      break;
      case '110':
        output.push({title: 'Dalsland', year: el.key[1], pop: el.values[0]});
      break;
      case '211':
        output.push({title: 'Närke', year: el.key[1], pop: el.values[0]});
      break;
      case '212':
        output.push({title: 'Södermanland', year: el.key[1], pop: el.values[0]});
      break;
      case '213':
        output.push({title: 'Värmland', year: el.key[1], pop: el.values[0]});
      break;
      case '214':
        output.push({title: 'Västmanland', year: el.key[1], pop: el.values[0]});
      break;
      case '215':
        output.push({title: 'Uppland', year: el.key[1], pop: el.values[0]});
      break;
      case '217':
        output.push({title: 'Dalarna', year: el.key[1], pop: el.values[0]});
      break;
      case '316':
        output.push({title: 'Gästrikland', year: el.key[1], pop: el.values[0]});
      break;
      case '318':
        output.push({title: 'Hälsingland', year: el.key[1], pop: el.values[0]});
      break;
      case '319':
        output.push({title: 'Härjedalen', year: el.key[1], pop: el.values[0]});
      break;
      case '320':
        output.push({title: 'Medelpad', year: el.key[1], pop: el.values[0]});
      break;
      case '321':
        output.push({title: 'Ångermanland', year: el.key[1], pop: el.values[0]});
      break;
      case '322':
        output.push({title: 'Jämtland', year: el.key[1], pop: el.values[0]});
      break;
      case '323':
        output.push({title: 'Västerbotten', year: el.key[1], pop: el.values[0]});
      break;
      case '324':
        output.push({title: 'Lappland', year: el.key[1], pop: el.values[0]});
      break;
      case '325':
        output.push({title: 'Norrbotten', year: el.key[1], pop: el.values[0]});
      break;
   
      default:
        break;
    }
  });
  return output;
}