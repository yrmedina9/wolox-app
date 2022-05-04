import { shallowMount } from '@vue/test-utils';
import Pokemons from '@/components/PokemonsList.vue';
import PokemonCard from '@/components/pokemonCard.vue';

describe('Componente Pokemons.vue is render', () => {
  it('render component', async () => {
    const wrapper = shallowMount(Pokemons);
    await wrapper.vm.searchPokemons();
    expect(wrapper.find('.btn-search').exists()).toBe(true);
    const options = wrapper.find('select').findAll('option');
    await options.at(2).setSelected();
    expect(wrapper.find('option:checked').element.value).toBe('20');
  });
});

describe('Componente cardPokemons.vue is render', () => {
  it('renders props.pokemonData when passed in the card Pokemon', () => {
    const pokemonData = {
      ataque: 60,
      defensa: 30,
      especial: 31,
      experiencia: 52,
      hp: 40,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
      imgCvg:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg',
      imgJuego:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
      name: 'spearow'
    };
    const wrapper = shallowMount(PokemonCard, {
      props: { pokemonData }
    });
    expect(JSON.stringify(wrapper.props().pokemonData)).toMatch(
      JSON.stringify(pokemonData)
    );
    expect(wrapper.props().pokemonData.ataque).toBe(60);
  });
});
