import type { BaseTranslation } from "../../i18n-types";

const ru_embeds = {
	help: {
		title: "Команды {username}",
		description: "Вот список всех моих команд. Вы также можете их пересмотреть, введя `/` в поле Дискорда.",
	},
	about: {
		description:
			'{username} - интуитивно понятный и удобный Дискорд бот, подключенный к https://paliapedia.com и созданный @ {developers}.',
		statistics_name: 'Статистика',
		statistics_value: 'Серверы: {servers}\nЮзеры: {users}',
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
	item: {
		category: 'Разряд',
		rarity: 'Редкость',
		quality: 'Качество',
		cost: 'Стоимость',
		value: 'Цена',
		sold_at: 'Продать',
		crafted_by: 'Изготовить у',
		gathered_from: 'Находится в',
		quest_reward_from: 'Награда за квест',
		attached_to: 'Связано с',
		obtained_by_reading: 'Получено при чтении',
		reward_from: 'Награда за',
		obtained_from: 'Получено от',
		teaches_recipe: 'Откроет рецепт',
		needed_for_quest: 'Необходимо для квеста',
		contains_item: 'Содержит предмет(ы)',
	},
	quest: {
		starts_with: 'Начинается с',
		requirement: 'Условие',
		requirements: 'Условия',
		branching_goals: 'Завершить {count} задания',
		turn_in: 'Сдать',
		quest_return: 'Вернуться к',
		reward: 'Награда',
		rewards: 'Награды',
		friendship_points: 'x{amount} Очков Дружбы с {villager}',
		romance_points: 'x{amount} Очков Романтических Отношений с{villager}',
		mail_message: "Сообщение от {villager}",
		visit_from: 'Визит от {villager}',
	},
	recipe: {
		cost: 'Стоимость',
		craft_time: 'Время изготовления',
		required_ingredients: 'Необходимые ингредиенты',
		produces: 'Производит',
		sold_at: 'Продать в/у',
		vendors: 'Продавцы',
		gatherables: '... ?',
		mail: 'Почта',
		recipes: 'Рецепты',
	},
	villager: {
		gift_preferences: 'Предпочитаемые подарки',
		weekly_wants: 'Еженедельно желает',
		relationship:
			'{type} *this needs sentence adjustment in ru* уровень {level} - {levelName} (Необходимо {requiredValue})',
	},
	weekly_wants: {
		title: 'Смена еженедельно желаемых подарков',
		description:
			'Желаемые подарки на {date} уже доступны! Список находится на {url}.',
	},
	miscellaneous: {
		see_more: 'Просмотреть еще {count} ...',
		no_data: 'Данные отсутствуют.',
	},
} satisfies BaseTranslation;

export default ru_embeds;
