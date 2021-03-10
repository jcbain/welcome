const getAllJobs = async(db) => {
    const data =  await db.select().table('jobs')
    return data;
}

const getAllQueries = async(db) => {
    const data = await db.select().table('queries');
    return data;
}

module.exports = { getAllJobs, getAllQueries };