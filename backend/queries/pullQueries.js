const getAllJobs = async(db) => {
    const data =  await db.select().table('jobs')
    return data;
}

module.exports = { getAllJobs };