import type { BaseTranslation } from "../../i18n-types";

const it_embeds = {
	help: {
		title: "{username}'s commands",
		description: "Qui c'è la lista di tutti miei comandi. Puoi anche visualizzarli digitando `/` in Discord.",
	},
	about: {
		description:
			'{username} è un Discord bot intuitivo e facile da usare, connesso a https://paliapedia.com ed è stato creato da {developers}.',
		statistics_name: 'Statistica',
		statistics_value: 'Server: {servers}\nUtenti: {users}',
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
	item: {
		category: 'Categoria',
		rarity: 'Rarità',
		quality: 'Qualità',
		cost: 'Costo',
		value: 'Prezzo',
		sold_at: 'Venduto presso',
		crafted_by: 'Confezionato da',
		gathered_from: 'Raccolto in',
		quest_reward_from: 'Ricompensa di quest',
		attached_to: 'Allegato a',
		obtained_by_reading: 'Ottenuto leggendo',
		reward_from: 'Ricompensa di',
		obtained_from: 'Ottenuto da',
		teaches_recipe: 'Ingrediente della ricetta',
		needed_for_quest: 'Necessario per la quest',
		contains_item: 'Contiene l'oggetto',
	},
	quest: {
		starts_with: 'Parte da',
		requirement: 'Requisito',
		requirements: 'Requisiti',
		branching_goals: 'Completa i {count} seguenti',
		turn_in: 'Consegna a',
		quest_return: 'Ritorna a',
		reward: 'Ricompensa',
		rewards: 'Ricompense',
		friendship_points: 'x{amount} punti amicizia con {villager}',
		romance_points: 'x{amount} punti romance con {villager}',
		mail_message: "Messaggio da {villager}",
		visit_from: 'Una visita di {villager}',
	},
	recipe: {
		cost: 'Costo',
		craft_time: 'Tempo di lavorazione',
		required_ingredients: 'Ingredienti richiesti',
		produces: 'Produce',
		sold_at: 'Venduto da',
		vendors: 'Venditori',
		gatherables: 'Raccoglibili',
		mail: 'Posta',
		recipes: 'Ricette',
	},
	villager: {
		gift_preferences: 'Regali preferiti',
		weekly_wants: 'Richieste settimanali',
		relationship:
			'{type} livello {level} - {levelName} (Necessita {requiredValue})',
	},
	weekly_wants: {
		title: 'Rotazione delle richieste settimanali',
		description:
			'La rotazione delle richieste settimanali a {date} è ora disponibile! Puoi trovare la loro lista completa al {url}.',
	},
	miscellaneous: {
		see_more: 'Vedi ancora {count} ...',
		no_data: 'Dati non disponibili.',
	},
} satisfies BaseTranslation;

export default it_embeds;
