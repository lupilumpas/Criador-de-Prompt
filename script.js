const topicos = [
//Produto em ambientes residenciais
"Produto integrado a uma sala de estar moderna e aconchegante, com sofá confortável, mesa de centro, iluminação natural e decoração contemporânea.",
"Produto integrado a uma sala de estar sofisticada, com grandes janelas, móveis elegantes, iluminação indireta e elementos decorativos cuidadosamente posicionados.",
"Produto em uma sala de cinema doméstica, cercado por uma grande tela, poltronas confortáveis, iluminação ambiente e detalhes inspirados em cinemas profissionais.",
"Produto em uma sala de entretenimento doméstica, com televisão de tela ampla, sofá confortável, iluminação decorativa e equipamentos de mídia integrados ao ambiente.",
"Produto em um quarto com temática de viagens, cercado por malas, mapas, fotografias, lembranças de diferentes países e objetos colecionados durante viagens.",
"Produto em um quarto inspirado em uma viagem específica, com decoração baseada em mapas, souvenirs, fotografias e elementos culturais de um destino marcante.",
"Produto em um quarto gamer moderno, com computador de alto desempenho, monitor amplo, iluminação LED decorativa, periféricos e elementos visuais inspirados em jogos.",
"Produto em um quarto gamer mais discreto e sofisticado, com setup organizado, iluminação ambiente, mesa de computador e decoração tecnológica integrada ao espaço.",
"Produto em um quarto infantil alegre e colorido, cercado por brinquedos, livros infantis, elementos lúdicos e decoração temática apropriada para crianças.",
"Produto em um quarto infantil com temática de aventura, cercado por brinquedos, ilustrações, objetos decorativos e elementos que estimulam a imaginação.",
"Produto em um quarto adolescente moderno, com decoração jovem, objetos pessoais, pôsteres, iluminação decorativa e elementos que expressem personalidade.",
"Produto em um quarto adolescente com estilo criativo e descontraído, cercado por livros, objetos colecionáveis, fotografias, decoração personalizada e iluminação ambiente.",
"Produto integrado a um escritório doméstico moderno, com mesa de trabalho, computador, cadeira confortável, iluminação adequada e decoração organizada.",
"Produto em um home office sofisticado, com mesa de madeira, computador, estantes discretas, iluminação natural e decoração profissional e acolhedora.",
"Produto em uma biblioteca residencial elegante, cercado por estantes repletas de livros, móveis de madeira, iluminação quente e detalhes clássicos.",
"Produto em uma biblioteca residencial contemporânea, com grandes estantes, livros organizados, poltrona confortável, iluminação arquitetônica e decoração minimalista.",
"Produto em uma sala de leitura tranquila e confortável, com poltrona, livros, mesa lateral, iluminação suave e atmosfera acolhedora.",
"Produto em um pequeno cantinho de leitura próximo a uma janela, com poltrona confortável, livros, iluminação natural e decoração aconchegante.",
"Produto integrado a um banheiro residencial sofisticado, com revestimentos elegantes, iluminação indireta, bancada moderna e decoração cuidadosamente planejada.",
"Produto em um banheiro contemporâneo de alto padrão, com mármore, metais sofisticados, iluminação quente e composição visual limpa e elegante.",
"Produto em uma lavanderia moderna e perfeitamente organizada, cercado por armários, máquina de lavar, cestos e soluções inteligentes para aproveitamento do espaço.",
"Produto integrado a uma lavanderia compacta e criativa, utilizando um espaço normalmente pouco aproveitado de maneira funcional e visualmente interessante.",
"Produto em um corredor decorado de uma casa moderna, integrado à parede com iluminação indireta, quadros, plantas e elementos decorativos.",
"Produto em um corredor estreito e elegante, aproveitando uma parede livre como parte da decoração e criando uma composição visual funcional.",
"Produto em um hall de entrada sofisticado, próximo à porta principal, com aparador, espelho, iluminação acolhedora e decoração cuidadosamente organizada.",
"Produto em um hall de entrada compacto e moderno, combinado com plantas, objetos decorativos, iluminação indireta e elementos que valorizam a chegada à casa.",
"Produto integrado à parede de uma escada residencial moderna, acompanhando a arquitetura do ambiente e combinando com iluminação e elementos decorativos.",
"Produto em uma escada residencial com design contemporâneo, cercado por paredes texturizadas, iluminação arquitetônica, plantas e detalhes decorativos.",
"Produto em uma garagem residencial moderna e organizada, cercado por ferramentas, armários, bicicletas e equipamentos cuidadosamente armazenados.",
"Produto em uma garagem de alto padrão transformada em espaço multifuncional, com organização impecável, iluminação moderna, ferramentas e equipamentos.",
"Produto em uma oficina doméstica organizada, cercado por ferramentas, bancada de trabalho, caixas organizadoras e equipamentos utilizados em projetos manuais.",
"Produto em uma oficina doméstica criativa e funcional, com bancada de madeira, ferramentas penduradas, materiais de trabalho e iluminação direcionada.",
"Produto em uma varanda fechada transformada em um espaço aconchegante de convivência, com poltronas, plantas, iluminação quente e decoração confortável.",
"Produto em uma varanda fechada transformada em um pequeno espaço de trabalho e relaxamento, com mesa, cadeira confortável, plantas e iluminação natural.", 



//Produto em cozinhas, áreas gourmet e alimentação
"Produto integrado a uma cozinha moderna de alto padrão, com armários planejados, bancada de pedra, eletrodomésticos embutidos, iluminação arquitetônica e grandes superfícies limpas.",
"Produto em uma cozinha rústica de casa de campo, com móveis de madeira, paredes texturizadas, utensílios tradicionais, elementos naturais e iluminação quente.",
"Produto em uma cozinha contemporânea com grande ilha central, banquetas, pendentes decorativos, armários minimalistas e composição arquitetônica sofisticada.",
"Produto em uma cozinha compacta e moderna de apartamento, com aproveitamento inteligente das paredes, armários planejados, eletrodomésticos integrados e iluminação natural.",
"Produto em uma cozinha ampla com portas de vidro voltadas para um jardim, combinando móveis modernos, madeira, plantas e luz natural abundante.",
"Produto em uma área gourmet completa, com bancada espaçosa, churrasqueira, mesa para refeições, banquetas, armários e iluminação acolhedora para receber convidados.",
"Produto em uma área gourmet externa coberta, integrada a um jardim, com churrasqueira, mesa de madeira, plantas e iluminação decorativa para encontros ao ar livre.",
"Produto em uma área gourmet sofisticada de varanda, com bancada de pedra, churrasqueira embutida, televisão, banquetas e móveis confortáveis.",
"Produto próximo a uma churrasqueira residencial, cercado por bancada de apoio, utensílios para churrasco, madeira, plantas e elementos de uma área de lazer.",
"Produto em um espaço de churrasqueira rústico, com tijolos aparentes, madeira envelhecida, bancada artesanal, utensílios tradicionais e iluminação quente.",
"Produto em uma sala de jantar elegante preparada para uma refeição, com mesa posta, louças, cadeiras sofisticadas, iluminação pendente e decoração refinada.",
"Produto em uma sala de jantar contemporânea com mesa de madeira, grandes janelas, cadeiras modernas, iluminação natural e decoração minimalista.",
"Produto em uma cafeteria moderna de estilo urbano, com balcão contemporâneo, mesas pequenas, iluminação pendente, concreto aparente e elementos decorativos industriais.",
"Produto em uma cafeteria aconchegante de bairro, cercado por mesas de madeira, plantas, livros, grandes janelas e decoração acolhedora com aparência artesanal.",
"Produto em uma padaria artesanal com decoração rústica, cercado por balcão de madeira, pães expostos, prateleiras, utensílios de panificação e iluminação quente.",
"Produto em uma padaria artesanal contemporânea, com vitrines de produtos recém-assados, bancadas claras, detalhes em madeira, iluminação natural e ambiente acolhedor.",
"Produto em um restaurante sofisticado, com mesas cuidadosamente preparadas, iluminação indireta, materiais nobres, decoração elegante e atmosfera contemporânea.",
"Produto em um restaurante sofisticado com grandes janelas, mesas bem espaçadas, plantas ornamentais, iluminação natural e uma composição visual moderna.",
"Produto em um restaurante rústico com forte presença de madeira, mesas artesanais, paredes texturizadas, iluminação quente e elementos decorativos tradicionais.",
"Produto em um restaurante rústico inspirado em uma casa de campo, com madeira envelhecida, pedra aparente, mesas grandes, utensílios tradicionais e iluminação aconchegante.",
"Produto integrado a uma cozinha de restaurante profissional, cercado por bancadas de aço inoxidável, equipamentos culinários, utensílios e uma área de preparação organizada.",
"Produto em uma cozinha profissional de restaurante durante a preparação de alimentos, com bancadas de trabalho, utensílios culinários, equipamentos industriais e iluminação funcional.",
"Produto em uma cozinha profissional de restaurante contemporâneo, com equipamentos de aço inoxidável, grandes bancadas, organização impecável e composição visual inspirada em cozinhas de alta gastronomia.",



//Produto em jardins, áreas externas e espaços de convivência
"Produto integrado a um jardim tropical exuberante, cercado por folhagens grandes, palmeiras, plantas de diferentes alturas, pedras naturais e caminhos entre a vegetação.",
"Produto em um jardim tropical próximo a uma área de convivência, com plantas exóticas, vasos decorativos, madeira natural, pedras e iluminação suave entre a vegetação.",
"Produto em um jardim japonês cuidadosamente planejado, com pedras ornamentais, vegetação baixa, pequenos arbustos, madeira e elementos inspirados na estética tradicional japonesa.",
"Produto em um jardim japonês minimalista, cercado por cascalho cuidadosamente disposto, pedras naturais, árvores pequenas, musgo e uma composição visual serena.",
"Produto em uma varanda aberta cercada por plantas, com vasos de diferentes tamanhos, móveis confortáveis, luz natural e uma composição urbana aconchegante.",
"Produto em uma varanda aberta transformada em um pequeno jardim particular, com plantas pendentes, vasos suspensos, móveis de madeira e iluminação decorativa.",
"Produto em uma área externa próxima a uma piscina, com espreguiçadeiras, plantas tropicais, piso de pedra, móveis de área externa e iluminação refletida na água.",
"Produto em uma área de lazer junto a uma piscina durante o fim da tarde, cercado por vegetação, móveis confortáveis, toalhas e iluminação quente criando uma atmosfera relaxante.",
"Produto em uma varanda de casa na praia, com vista para o mar, móveis leves, plantas tropicais, tecidos naturais e elementos decorativos inspirados no litoral.",
"Produto em uma varanda litorânea com vista para um jardim tropical, cercada por madeira clara, vasos de plantas, móveis descontraídos e iluminação natural.",
"Produto em um jardim de inverno dentro de uma residência, com teto de vidro, plantas ornamentais, pedras naturais, vasos decorativos e luz natural entrando pelo ambiente.",
"Produto em um jardim de inverno contemporâneo integrado à sala da residência, com grandes painéis de vidro, vegetação exuberante, pedras e iluminação arquitetônica.",
"Produto em um pequeno pátio interno de uma casa, cercado por paredes, plantas, vasos, bancos e elementos arquitetônicos que criam um espaço reservado e aconchegante.",
"Produto em um pátio interno compacto com piso de pedras, plantas tropicais, uma pequena fonte de água, móveis discretos e iluminação suave.",
"Produto em uma área externa de descanso com rede, cercada por plantas, árvores, piso de madeira e móveis confortáveis em uma atmosfera tranquila.",
"Produto em um espaço externo de relaxamento com rede entre duas estruturas, vasos de plantas, almofadas, madeira natural e luz suave do fim da tarde.",
"Produto em um espaço externo rústico com uma fogueira central, bancos de madeira, pedras naturais, plantas e iluminação quente criando uma atmosfera de encontro.",
"Produto em uma área de convivência ao ar livre com fogueira, cercada por árvores, bancos rústicos, lanternas decorativas e elementos naturais.",



//Produto em espaços criativos, artísticos e hobbies
// OU
//Produto em espaços de entretenimento, coleções e tecnologia
"Produto em um estúdio de música doméstico com instrumentos ao redor, fotografado em perspectiva 3/4, com violão, teclado, amplificadores e tratamento acústico visíveis ao fundo.",
"Produto em uma sala dedicada a jogos de tabuleiro, visto de um ângulo levemente elevado sobre uma grande mesa de jogo, com caixas de jogos, peças e estantes organizadas ao redor.",
"Produto em uma sala de videogames retrô, fotografado de frente em uma composição inspirada em uma antiga sala de jogos, com televisores clássicos, consoles antigos e iluminação colorida.",
"Produto em uma coleção de livros e objetos nerd/geek, integrado a uma grande estante, fotografado de um ângulo lateral que revele livros, quadrinhos, colecionáveis e objetos decorativos.",
"Produto em um estúdio de fotografia profissional, visto de um ângulo mais aberto, cercado por tripés, softboxes, câmera, fundos fotográficos e equipamentos de produção.",
"Produto em um ateliê de pintura, fotografado em perspectiva 3/4 próximo a uma mesa de trabalho, com telas, pincéis, tintas, cavaletes e obras em processo ao fundo.",
"Produto em uma oficina de artesanato organizada, visto de cima em uma composição ampla, com bancada cheia de materiais, ferramentas manuais, tecidos, papéis e caixas de armazenamento.",
"Produto em um espaço dedicado a plantas e jardinagem, integrado entre vasos e bancadas de cultivo, fotografado de um ângulo baixo que destaque a vegetação em diferentes alturas.",
"Produto em uma sala de instrumentos musicais, visto lateralmente e integrado a uma composição com guitarras, violões, teclado, bateria e suportes de instrumentos distribuídos pelo ambiente.",
"Produto em um espaço moderno de criação de conteúdo, fotografado em perspectiva 3/4, com câmera profissional, microfone, computador, tripés e iluminação de estúdio compondo o cenário.",
"Produto em um pequeno estúdio de gravação, fotografado de uma perspectiva mais distante, com mesa de áudio, microfones, fones, monitores de referência e paredes com tratamento acústico.",
"Produto em uma sala dedicada a filmes e séries, visto de um ângulo baixo próximo ao centro do ambiente, com televisão de grandes dimensões, sofá confortável, caixas de som e iluminação ambiente.",
"Produto integrado a uma coleção de miniaturas e objetos colecionáveis, fotografado em close contextualizado, com prateleiras iluminadas repletas de peças detalhadas ao fundo.",
"Produto em um ambiente dedicado a bicicletas e equipamentos esportivos, fotografado em perspectiva ampla e levemente elevada, com bicicletas, capacetes, acessórios esportivos e suportes organizados nas paredes.",
"Produto em um estúdio musical doméstico compacto, fotografado frontalmente, com teclado e equipamentos de áudio em primeiro plano e instrumentos pendurados na parede ao fundo.",
"Produto em uma sala de jogos de tabuleiro com atmosfera sofisticada, fotografado de um ângulo lateral, com uma partida organizada sobre a mesa, estantes de jogos e iluminação pendente.",
"Produto em uma sala de videogames retrô inspirada nos anos 1980 e 1990, fotografado em perspectiva 3/4, com fliperama, televisão de tubo, cartuchos e consoles antigos compondo o ambiente.",
"Produto em um espaço geek contemporâneo com estantes iluminadas, livros, quadrinhos, figuras colecionáveis e objetos tecnológicos, fotografado em um ângulo aberto que mostre toda a coleção.",
"Produto em um estúdio fotográfico com fundo de papel, refletores e equipamentos profissionais, fotografado de uma posição elevada, mostrando a organização do espaço de produção.",
"Produto em um ateliê artístico com grandes janelas e iluminação natural, fotografado de um ângulo diagonal, com cavaletes, telas coloridas, tintas e materiais de pintura espalhados pelo ambiente.",
"Produto em uma oficina criativa de artesanato com bancada de madeira, fotografado de perto em perspectiva 3/4, com ferramentas, materiais recicláveis, linhas e pequenos projetos em andamento.",
"Produto em uma pequena estufa doméstica dedicada à jardinagem, fotografado de dentro do ambiente em uma perspectiva ampla, cercado por vasos, mudas, ferramentas e prateleiras de plantas.",
"Produto em uma sala de ensaio musical organizada, fotografado de uma posição mais distante, com bateria, guitarras, amplificadores, microfones e cabos cuidadosamente distribuídos.",
"Produto em um estúdio de criação de conteúdo com estética profissional, fotografado de um ângulo lateral, mostrando simultaneamente câmera, iluminação, computador, microfone e cenário de gravação.",
"Produto em um pequeno estúdio de podcast e gravação, visto frontalmente, com dois microfones, mesa compacta, fones de ouvido, painéis acústicos e iluminação suave.",
"Produto em uma sala cinematográfica doméstica com decoração inspirada em cinema, fotografado de trás do sofá em uma perspectiva ampla, mostrando a tela, poltronas e iluminação indireta.",
"Produto em uma sala de colecionador com vitrines iluminadas, miniaturas e objetos raros organizados por categorias, fotografado em uma perspectiva diagonal que percorra toda a coleção.",
"Produto em uma garagem transformada em espaço para bicicletas e esportes, fotografado de um ângulo baixo, com bicicletas penduradas, prateleiras de equipamentos, capacetes e acessórios esportivos.",



//Produto em lojas e estabelecimentos
//Produto em escritórios e ambientes corporativos
//Produto em hotéis e ambientes de hospitalidade
//Produto em showrooms e espaços de exposição
"Produto em uma loja de decoração contemporânea, cercado por objetos decorativos, quadros, vasos e móveis cuidadosamente ambientados.",
"Produto em uma loja especializada em móveis, apresentado em um amplo ambiente com diferentes conjuntos de mobiliário, iluminação de showroom e corredores espaçosos.",
"Produto em uma floricultura charmosa, cercado por arranjos de flores frescas, bancadas de atendimento, vasos e plantas ornamentais.",
"Produto em uma loja de plantas com grandes prateleiras de vegetação, vasos de diferentes tamanhos, ferramentas de jardinagem e iluminação natural.",
"Produto em uma loja de produtos artesanais, rodeado por peças feitas à mão, objetos decorativos, embalagens criativas e expositores de madeira.",
"Produto em uma marcenaria organizada, com bancadas de trabalho, ferramentas penduradas, peças de madeira e projetos em diferentes etapas de produção.",
"Produto em um showroom sofisticado de móveis, integrado a uma sala completa montada para demonstração, com sofá, mesa, iluminação arquitetônica e decoração contemporânea.",
"Produto em uma loja de materiais para construção, exposto em um ambiente amplo com amostras de revestimentos, pisos, ferramentas, madeiras e materiais organizados por setores.",
"Produto em uma boutique sofisticada, apresentado em um ambiente elegante com vitrines, araras, espelhos, iluminação direcionada e decoração refinada.",
"Produto em uma livraria aconchegante, cercado por estantes altas repletas de livros, poltronas para leitura, mesas de exposição e iluminação quente.",
"Produto em uma papelaria criativa, rodeado por cadernos, materiais de desenho, canetas coloridas, organizadores e expositores modernos.",
"Produto em um escritório moderno, integrado a uma estação de trabalho elegante com computador, mesa, cadeira ergonômica, plantas e iluminação natural.",
"Produto em uma recepção de empresa contemporânea, colocado próximo ao balcão de atendimento, com sofá, poltronas, identidade visual discreta e arquitetura corporativa.",
"Produto em um hotel sofisticado, integrado ao lobby principal com sofás elegantes, balcão de recepção, iluminação indireta, grandes janelas e decoração de alto padrão.",
"Produto em uma loja de decoração com estilo mais rústico, fotografado em perspectiva 3/4 entre móveis de madeira, luminárias, vasos e objetos artesanais.",
"Produto em um showroom de móveis com grandes janelas, visto de um ângulo aberto que mostre diferentes ambientes residenciais montados lado a lado.",
"Produto em uma floricultura com fachada envidraçada, recebendo abundante luz natural e apresentando flores, plantas suspensas e arranjos coloridos em diferentes alturas.",
"Produto em uma loja de plantas com estética de pequena estufa urbana, com vegetação abundante, estruturas metálicas, vasos de barro e caminhos estreitos entre as plantas.",
"Produto em uma marcenaria contemporânea e limpa, com grandes máquinas ao fundo, estoque de madeira organizado e uma bancada central utilizada para montagem de peças.",
"Produto em um showroom minimalista de móveis, com poucos elementos cuidadosamente posicionados, grandes espaços vazios, paredes neutras e iluminação arquitetônica.",
"Produto em uma livraria moderna com área de leitura integrada, grandes estantes, mesas com lançamentos, poltronas confortáveis e luz natural entrando pelas janelas.",
"Produto em uma papelaria artística especializada em desenho e pintura, com paredes repletas de materiais, prateleiras organizadas e uma grande bancada para criação.",
"Produto em um escritório criativo com mesas compartilhadas, computadores, quadros de ideias, plantas e objetos de design, fotografado de uma perspectiva lateral.",
"Produto na recepção de uma empresa de arquitetura ou design, com maquetes, amostras de materiais, revistas de projetos, balcão moderno e iluminação sofisticada.",
"Produto em um hotel sofisticado próximo à área de convivência, com lounge elegante, mesas baixas, plantas ornamentais e grandes elementos arquitetônicos.",



//Produto em casas e residências de diferentes estilos
"Produto em uma casa de praia com decoração clara e tropical, grandes portas de vidro abertas para o exterior, móveis de madeira clara, tecidos naturais e plantas tropicais.",
"Produto em uma casa de montanha cercada por natureza, com grandes janelas voltadas para a paisagem, madeira aparente, pedra natural, móveis confortáveis e iluminação aconchegante.",
"Produto em uma casa de campo com arquitetura rústica, paredes texturizadas, vigas de madeira, móveis artesanais, cerâmica decorativa e vista para uma área verde.",
"Produto em uma casa histórica restaurada, combinando elementos arquitetônicos antigos com móveis contemporâneos, pisos preservados, paredes ornamentadas e iluminação cuidadosamente planejada.",
"Produto em um loft urbano com arquitetura industrial, grandes janelas, concreto aparente, estruturas metálicas, tijolos expostos e móveis contemporâneos.",
"Produto em um apartamento de luxo com grandes janelas panorâmicas, vista para uma cidade moderna, mobiliário sofisticado, materiais nobres e iluminação natural abundante.",
"Produto em uma casa moderna completamente cercada por vidro e vegetação, com arquitetura minimalista, jardins integrados aos ambientes internos e luz natural atravessando o espaço.",
"Produto em uma cabana aconchegante no meio da floresta, com paredes de madeira, grandes janelas, móveis confortáveis, iluminação quente e árvores visíveis ao redor.",
"Produto em uma casa com decoração inspirada em viagens, reunindo mapas, fotografias, lembranças de diferentes lugares, objetos culturais e móveis adquiridos em diferentes regiões.",
"Produto em um ambiente inspirado em uma antiga oficina artesanal, com madeira envelhecida, ferramentas tradicionais, bancadas robustas, objetos antigos e iluminação quente.",
"Produto em uma casa de praia contemporânea com vista direta para o mar, fotografado em uma composição aberta com móveis leves, plantas tropicais e grandes superfícies envidraçadas.",
"Produto em uma casa de montanha durante uma manhã de inverno, com luz natural entrando pelas janelas, lareira ao fundo, mantas, madeira e uma paisagem montanhosa visível.",
"Produto em uma casa de campo com grande varanda integrada ao jardim, cercada por árvores, vasos, móveis rústicos e elementos de decoração artesanal.",
"Produto em uma residência histórica com pé-direito alto e grandes janelas, fotografado em perspectiva 3/4 para destacar detalhes arquitetônicos, molduras, portas antigas e móveis restaurados.",
"Produto em um loft industrial dividido entre sala e área de trabalho, com pé-direito alto, tubulações aparentes, escada metálica, grandes luminárias e decoração urbana.",
"Produto em um apartamento de luxo com interior contemporâneo e vista panorâmica da cidade, fotografado de um ângulo levemente elevado que mostre a integração dos ambientes.",
"Produto em uma residência moderna integrada a um jardim interno, com paredes de vidro, árvores dentro da arquitetura, pedras naturais, concreto e móveis minimalistas.",
"Produto em uma pequena cabana de madeira cercada por floresta densa, fotografado de um ângulo próximo à janela, com vegetação aparecendo através do vidro e iluminação interna aconchegante.",
"Produto em uma casa com temática de viagens organizada como uma coleção pessoal, com malas antigas, mapas emoldurados, souvenirs, fotografias e objetos decorativos de diferentes países.",
"Produto em um ambiente de inspiração artesanal antiga, com bancada de madeira maciça, ferramentas manuais penduradas, prateleiras de materiais e objetos de trabalho envelhecidos.",


//Produto em ambientes conceituais e arquiteturas incomuns
//Produto em ambientes clássicos e tradicionais
//Produto em ambientes sofisticados e de luxo
//Produto em cenários livres e criativos
"Produto em um ambiente totalmente construído ao redor de madeira e elementos naturais, com paredes, móveis e detalhes arquitetônicos em madeira, pedras, fibras naturais e vegetação.",
"Produto em uma casa futurista com arquitetura contemporânea, superfícies curvas, iluminação integrada, materiais tecnológicos e grandes painéis de vidro, mantendo o produto com aparência completamente real e natural.",
"Produto em uma casa subterrânea moderna e aconchegante, com paredes de concreto e pedra, iluminação indireta, claraboias, móveis contemporâneos e elementos naturais.",
"Produto em um ambiente inspirado em uma grande estufa residencial, cercado por plantas de diferentes tamanhos, estruturas de vidro, vasos, caminhos naturais e abundante iluminação.",
"Produto em uma biblioteca enorme com arquitetura clássica, estantes de livros até o teto, escadas móveis, mesas de leitura, grandes janelas e iluminação quente.",
"Produto em um ambiente inspirado em um chalé europeu, com madeira, pedra, tecidos aconchegantes, móveis tradicionais, janelas amplas e decoração típica de uma região montanhosa.",
"Produto em uma cobertura urbana com vista panorâmica da cidade, grandes janelas, arquitetura sofisticada, móveis contemporâneos e iluminação natural de fim de tarde.",
"Produto em um ambiente de luxo inspirado em um hotel cinco estrelas, com materiais sofisticados, iluminação indireta, mobiliário elegante, grandes arranjos decorativos e arquitetura refinada.",
"Produto em uma composição completamente inesperada escolhida pela IA, combinando um ambiente incomum com elementos arquitetônicos, decorativos e funcionais coerentes, mantendo o resultado plausível, comercial e visualmente atraente.",
"Produto em um cenário livre escolhido pela IA, permitindo que ambiente, composição, iluminação, perspectiva e elementos secundários sejam definidos de forma criativa, desde que o resultado seja bonito, realista, plausível e comercial.",
"Produto em um ambiente construído com forte integração entre madeira e natureza, fotografado em uma perspectiva aberta que mostre a arquitetura, vegetação, pedras naturais e diferentes texturas ao redor.",
"Produto em uma residência futurista com iluminação colorida discreta, móveis de design, paredes curvas e elementos tecnológicos, fotografado em perspectiva 3/4 para contrastar a arquitetura moderna com a aparência real do produto.",
"Produto em uma biblioteca monumental com dois andares de estantes, mezanino, escada de madeira, mesas de leitura e grandes janelas, fotografado de um ângulo amplo que revele a dimensão do espaço.",
"Produto em um chalé europeu cercado por neve e montanhas, com interior aquecido, lareira, madeira envelhecida, mantas e decoração tradicional, criando uma atmosfera acolhedora.",
"Produto em uma cobertura urbana durante a noite, com iluminação interna sofisticada e uma grande cidade iluminada através das janelas panorâmicas, mostrando o produto integrado naturalmente ao ambiente.",
"Produto em um ambiente de hotel de luxo próximo a uma grande janela, com vista para uma paisagem urbana ou natural, móveis sofisticados, iluminação suave e composição inspirada em fotografia de interiores.",
"Produto em um cenário inesperado escolhido pela IA dentro de uma residência ou espaço comercial plausível, utilizando arquitetura, objetos e iluminação pouco convencionais sem alterar a forma, cor ou características do produto.",
"Produto em um ambiente livre escolhido pela IA, priorizando uma situação visualmente diferente das demais opções, com composição fotográfica criativa, iluminação naturalista, arquitetura interessante e integração comercialmente plausível do produto.",



//Produto em salas e ambientes de convivência no Natal
//Produto em casas de campo e montanha no Natal
//Produto em cozinhas, salas de jantar e áreas gourmet no Natal
//Produto em varandas, entradas e ambientes residenciais no Natal
//Produto em lojas e estabelecimentos no Natal
//Produto em mercados, praças e vilas de Natal
//Produto em ambientes externos e composições natalinas
//Produto em cenários natalinos livres e criativos
"Produto em uma sala de estar decorada para o Natal, com árvore iluminada, presentes, guirlandas e iluminação quente.",
"Produto em uma sala de Natal sofisticada, com decoração elegante em tons neutros, árvore decorada, velas e luzes suaves.",
"Produto em uma sala de estar natalina aconchegante, com árvore de Natal próxima à janela, mantas, almofadas e presentes espalhados pelo ambiente.",
"Produto em uma casa de campo decorada para o Natal, com madeira aparente, árvore tradicional, guirlandas e elementos naturais.",
"Produto em uma casa de montanha durante o Natal, com neve visível pelas janelas, lareira acesa, árvore iluminada e decoração aconchegante.",
"Produto em uma cabana de madeira decorada para o Natal, cercada por floresta, com luzes natalinas nas janelas e decoração artesanal.",
"Produto em uma cozinha residencial decorada para o Natal, com biscoitos natalinos, utensílios temáticos, guirlandas e pequenas luzes decorativas.",
"Produto em uma sala de jantar preparada para a ceia de Natal, com mesa posta, louças elegantes, velas, árvore decorada e iluminação quente.",
"Produto em uma área gourmet residencial decorada para uma confraternização de Natal, com mesa preparada, luzes decorativas, plantas e elementos natalinos.",
"Produto em uma varanda residencial decorada para o Natal, com luzes penduradas, plantas, pequenos enfeites e vista para uma cidade iluminada.",
"Produto em uma varanda de casa de praia decorada para o Natal, combinando elementos natalinos tradicionais com decoração tropical e madeira clara.",
"Produto em uma entrada residencial decorada para o Natal, com grande guirlanda na porta, vasos ornamentais, luzes e pequenos presentes.",
"Produto em um hall de entrada sofisticado com decoração natalina, árvore elegante, iluminação indireta, guirlandas e elementos dourados.",
"Produto em uma biblioteca residencial decorada para o Natal, com árvore entre as estantes, livros, luzes quentes e pequenos enfeites natalinos.",
"Produto em um escritório doméstico decorado para o Natal, com pequena árvore sobre a mesa, luzes, presentes e decoração discreta.",
"Produto em um quarto aconchegante decorado para o Natal, com árvore pequena, luzes, presentes, roupas de cama temáticas e iluminação suave.",
"Produto em um quarto infantil durante o Natal, cercado por brinquedos, presentes, árvore pequena, enfeites coloridos e decoração divertida.",
"Produto em um quarto adolescente decorado para o Natal, com luzes decorativas, pequenos enfeites, presentes e decoração natalina integrada ao estilo do ambiente.",
"Produto em uma loja de decoração totalmente preparada para o Natal, com árvores decoradas, guirlandas, presentes, vitrines e diversos produtos natalinos.",
"Produto em um showroom de móveis com decoração de Natal, apresentando uma sala completa decorada com árvore, presentes, iluminação quente e elementos festivos.",
"Produto em uma floricultura durante a época de Natal, cercado por flores, plantas, arranjos natalinos, pinhas, guirlandas e pequenas árvores.",
"Produto em uma confeitaria decorada para o Natal, com vitrines de doces natalinos, biscoitos decorados, guirlandas e iluminação quente.",
"Produto em uma padaria artesanal decorada para o Natal, com pães, doces, biscoitos natalinos, madeira, luzes e decoração tradicional.",
"Produto em um café aconchegante decorado para o Natal, com árvore iluminada, mesas decoradas, canecas temáticas, guirlandas e luzes quentes.",
"Produto em um restaurante sofisticado preparado para a ceia de Natal, com mesas elegantemente decoradas, velas, árvore e iluminação indireta.",
"Produto em um restaurante rústico decorado para o Natal, com madeira, luzes quentes, guirlandas naturais, pinhas e grandes mesas preparadas para a ceia.",
"Produto em um mercado natalino inspirado em pequenas lojas europeias, com madeira, iluminação quente, presentes, enfeites e produtos artesanais.",
"Produto em uma praça de Natal com pequenas barracas decoradas, árvores iluminadas, neve artificial, luzes suspensas e atmosfera festiva.",
"Produto em uma pequena vila europeia durante a época de Natal, com casas decoradas, árvores iluminadas, neve e iluminação aconchegante.",
"Produto em uma varanda externa durante uma noite de Natal, com luzes penduradas, árvore iluminada, móveis confortáveis e céu noturno ao fundo.",
"Produto em um jardim residencial decorado para o Natal, com árvores iluminadas, caminhos de luzes, enfeites, plantas e decoração externa.",
"Produto próximo a uma grande árvore de Natal em um ambiente sofisticado, fotografado em perspectiva 3/4, com presentes e luzes criando profundidade ao fundo.",
"Produto integrado a uma decoração natalina vista de um ângulo levemente elevado, mostrando árvore, mesa decorada, presentes e diferentes elementos festivos no ambiente.",
"Produto em uma composição natalina mais minimalista, com poucos elementos decorativos, árvore pequena, iluminação quente, madeira e tons neutros.",
"Produto em uma composição natalina tradicional e colorida, com vermelho, verde, dourado, árvore cheia de enfeites, presentes e luzes brilhantes.",
"Produto em uma decoração de Natal inspirada na natureza, com madeira, pinhas, galhos, plantas, tecidos naturais, luzes quentes e elementos artesanais.",
"Produto em uma decoração de Natal moderna, com árvore contemporânea, formas geométricas, iluminação arquitetônica, poucos enfeites e ambiente sofisticado.",
"Produto em uma decoração de Natal rústica, com madeira envelhecida, tecidos, pinhas, guirlandas naturais, velas e iluminação quente.",
"Produto em um ambiente natalino inspirado em uma manhã de Natal, com luz natural entrando pelas janelas, árvore decorada, presentes e ambiente tranquilo.",
"Produto em um ambiente natalino durante a noite, com iluminação quase toda proveniente da árvore, luzes decorativas, velas e iluminação indireta.",
"Produto em uma composição de Natal ao ar livre, com decoração iluminada, árvores, móveis de madeira, plantas e pequenas luzes espalhadas pelo espaço.",
"Produto em um cenário natalino inesperado escolhido pela IA, mantendo uma composição realista e comercial, com decoração de Natal integrada naturalmente ao ambiente.",
"Produto em um cenário de Natal escolhido livremente pela IA, permitindo variar arquitetura, decoração, iluminação, perspectiva e contexto, mantendo o produto completamente realista e inalterado."
];

//TEMAS JA EXISTENTES 


// Sala de estar
// Cinema
// Entretenimento
// Quarto
// Quarto infantil
// Quarto adolescente
// Quarto gamer
// Home office
// Biblioteca
// Leitura
// Banheiro
// Lavanderia
// Corredor
// Entrada
// Escada
// Garagem
// Oficina
// Varanda

// Cozinha
// Área gourmet
// Churrasqueira
// Sala de jantar
// Café
// Padaria
// Restaurante
// Cozinha profissional

// Jardim
// Jardim japonês
// Varanda externa
// Piscina
// Praia
// Jardim de inverno
// Pátio
// Área de descanso
// Fogueira

// Música
// Jogos
// Videogame
// Geek
// Fotografia
// Pintura
// Artesanato
// Jardinagem
// Criação de conteúdo
// Podcast
// Cinema
// Coleções
// Esportes

// Loja
// Floricultura
// Marcenaria
// Materiais de construção
// Boutique
// Livraria
// Papelaria
// Escritório
// Recepção corporativa
// Hotel
// Showroom

// Casa de praia
// Casa de montanha
// Casa de campo
// Casa histórica
// Loft
// Apartamento de luxo
// Casa moderna
// Cabana
// Casa temática
// Oficina antiga

// Arquitetura natural
// Futurista
// Subterrânea
// Estufa
// Biblioteca monumental
// Chalé
// Cobertura
// Hotel de luxo
// Cenário livre

// Natal

const inicio = "Crie uma imagem usando o meu produto integrado ao tema escolhido abaixo:\nTema:";

const importante = "IMPORTANTE:\n- NÃO altere o produto em sua FORMA, COR, MATERIAL ou características originais.\n- NÃO redesenhe, estilize ou transforme o produto.\n- O produto deve continuar sendo claramente o mesmo produto fornecido como referência.\n- É permitido alterar o ÂNGULO, a posição, a perspectiva e a iluminação do produto.\n- Todo o restante da cena pode ser criado livremente para representar o tema.\n- Use elementos do ambiente que combinem com o tema e tornem a cena interessante e única.\nConfio em você ;)";

const numeroEl = document.getElementById("numero");
const topicoEl = document.getElementById("topico");
const promptEl = document.getElementById("prompt");
const statusEl = document.getElementById("status");

let indiceAtual = -1;

function gerarPrompt(indice) {
  const topico = topicos[indice];
  return `${inicio} ${topico}\n\n${importante}`;
}

function sortearTopico() {
  indiceAtual = Math.floor(Math.random() * topicos.length);

  numeroEl.textContent = indiceAtual + 1;
  topicoEl.textContent = topicos[indiceAtual];
  promptEl.value = gerarPrompt(indiceAtual);
  statusEl.textContent = "";
}

async function copiarPrompt() {
  if (indiceAtual === -1) {
    statusEl.textContent = "Primeiro sorteie um tópico.";
    return;
  }

  try {
    await navigator.clipboard.writeText(promptEl.value);
    statusEl.textContent = "✓ Frase copiada!";
  } catch (erro) {
    promptEl.select();
    document.execCommand("copy");
    statusEl.textContent = "✓ Frase copiada!";
  }
}

document.getElementById("sortear").addEventListener("click", sortearTopico);
document.getElementById("copiar").addEventListener("click", copiarPrompt);